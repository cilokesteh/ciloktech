import { NextResponse } from "next/server";

export const runtime = "edge";

const METRIC_NAMES = new Set(["CLS", "FCP", "INP", "LCP", "TTFB"]);
const RATINGS = new Set(["good", "needs-improvement", "poor"]);

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

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > 2048) {
    return NextResponse.json({ error: "payload_too_large" }, { status: 413 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
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
