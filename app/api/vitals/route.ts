import { NextResponse } from "next/server";

export const runtime = "edge";

const METRIC_NAMES = new Set(["CLS", "FCP", "INP", "LCP", "TTFB"]);
const RATINGS = new Set(["good", "needs-improvement", "poor"]);
const MAX_BODY_BYTES = 2048;
const RATE_LIMIT = 60;
const RATE_WINDOW_MS = 60_000;
const buckets = new Map<string, { count: number; resetAt: number }>();

function isMetric(value: unknown): value is Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const metric = value as Record<string, unknown>;
  return (
    typeof metric.id === "string" && metric.id.length <= 128 &&
    typeof metric.name === "string" && METRIC_NAMES.has(metric.name) &&
    typeof metric.value === "number" && Number.isFinite(metric.value) && metric.value >= 0 &&
    typeof metric.rating === "string" && RATINGS.has(metric.rating) &&
    typeof metric.navigationType === "string" && metric.navigationType.length <= 64
  );
}

function getClientKey(request: Request): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || "unknown";
}

function consumeRateLimit(key: string): { allowed: boolean; retryAfter: number } {
  const now = Date.now();
  const current = buckets.get(key);
  if (!current || current.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return { allowed: true, retryAfter: 0 };
  }
  if (current.count >= RATE_LIMIT) {
    return { allowed: false, retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)) };
  }
  current.count += 1;
  return { allowed: true, retryAfter: 0 };
}

async function readBodyWithLimit(request: Request): Promise<string> {
  if (!request.body) return "";
  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let total = 0;
  let body = "";

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > MAX_BODY_BYTES) throw new Error("payload_too_large");
      body += decoder.decode(value, { stream: true });
    }
    body += decoder.decode();
    return body;
  } finally {
    reader.releaseLock();
  }
}

export async function POST(request: Request) {
  const rate = consumeRateLimit(getClientKey(request));
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "rate_limited" },
      { status: 429, headers: { "retry-after": String(rate.retryAfter), "cache-control": "no-store" } }
    );
  }

  const declaredLength = Number(request.headers.get("content-length") ?? "0");
  if (declaredLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "payload_too_large" }, { status: 413 });
  }

  let raw: string;
  try {
    raw = await readBodyWithLimit(request);
  } catch {
    return NextResponse.json({ error: "payload_too_large" }, { status: 413 });
  }

  let payload: unknown;
  try {
    payload = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (!isMetric(payload)) {
    return NextResponse.json({ error: "validation_error" }, { status: 422 });
  }

  // Vercel captures structured console output. No IP, UA, cookie, or PII is logged.
  console.info(JSON.stringify({
    event: "web_vital",
    service: "ciloktech-web",
    timestamp: new Date().toISOString(),
    metric: payload,
  }));

  return new Response(null, {
    status: 204,
    headers: { "cache-control": "no-store" },
  });
}
