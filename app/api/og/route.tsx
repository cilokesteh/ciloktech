import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

// ── Validation schema (§IV.3.1: validate EVERY untrusted input) ──
// Inline validator (zod not installed — kept lean, no extra dep).
type OgType = "default" | "blog" | "harga";

function clamp(value: string | null, min: number, max: number, fallback: string): string {
  if (!value) return fallback;
  const trimmed = value.trim();
  if (trimmed.length < min) return fallback;
  return trimmed.length > max ? trimmed.slice(0, max) : trimmed;
}

function parseType(value: string | null): OgType {
  return value === "blog" || value === "harga" ? value : "default";
}

// ── In-memory rate limit (§VII.6 Tier 3 lenient) ──
// Edge runtime: Map stateful per-isolate, 60 req/min/IP default.
// Untuk multi-region production, swap ke Upstash/Redis.
const WINDOW_MS = 60_000;
const MAX_REQ = Number(process.env.OG_RATE_LIMIT_PER_MIN ?? "60");
const buckets = new Map<string, { count: number; reset: number }>();

function checkRate(ip: string): { ok: boolean; retryAfter: number } {
  const now = Date.now();
  const bucket = buckets.get(ip);
  if (!bucket || now > bucket.reset) {
    buckets.set(ip, { count: 1, reset: now + WINDOW_MS });
    return { ok: true, retryAfter: 0 };
  }
  if (bucket.count >= MAX_REQ) {
    return { ok: false, retryAfter: Math.ceil((bucket.reset - now) / 1000) };
  }
  bucket.count += 1;
  return { ok: true, retryAfter: 0 };
}

export async function GET(req: NextRequest) {
  // Rate limit by IP (best-effort, x-forwarded-for from Vercel)
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  const rl = checkRate(ip);
  if (!rl.ok) {
    return new Response(JSON.stringify({ error: "rate_limited" }), {
      status: 429,
      headers: {
        "content-type": "application/json",
        "retry-after": String(rl.retryAfter),
      },
    });
  }

  // Validate + clamp query params (§IV.3.1)
  const sp = new URL(req.url).searchParams;
  const title = clamp(sp.get("title"), 1, 200, "Cilok Tech — One-Man Studio");
  const subtitle = clamp(
    sp.get("subtitle"),
    1,
    120,
    "ONE-MAN STUDIO • SENIOR FULL-STACK • INDONESIA"
  );
  const tag = clamp(sp.get("tag"), 1, 80, "ciloktech.id • One-Man Studio");
  const type = parseType(sp.get("type"));
  const shortTitle = title.length > 80 ? title.slice(0, 77) + "..." : title;

  const bg = type === "blog" ? "#0a0a0a" : type === "harga" ? "#111827" : "#0a0a0a";
  const accent = type === "harga" ? "#f59e0b" : "#b45309";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200",
          height: "630",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: bg,
          padding: "48px 56px",
          fontFamily: "Inter, sans-serif",
          position: "relative",
        }}
      >
        {/* grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* top */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, zIndex: 1 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 9999,
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 20,
              color: "#0a0a0a",
              letterSpacing: "-0.02em",
            }}
          >
            CT
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 2 }}>
              <span style={{ fontWeight: 800, fontSize: 20, color: "white", letterSpacing: "-0.02em" }}>Cilok</span>
              <span style={{ fontWeight: 800, fontSize: 20, color: accent, letterSpacing: "-0.02em" }}>Tech</span>
              <span
                style={{
                  marginLeft: 8,
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  background: "white",
                  color: "black",
                  padding: "2px 7px",
                  borderRadius: 9999,
                }}
              >
                .ID
              </span>
            </div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", color: "#6b7280", marginTop: 2 }}>{subtitle}</div>
          </div>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(16,185,129,0.15)",
              border: "1px solid rgba(16,185,129,0.3)",
              borderRadius: 9999,
              padding: "6px 12px",
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: 9999, background: "#10b981" }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: "#6ee7b7", letterSpacing: "0.05em" }}>ONE-MAN • AVAILABLE</span>
          </div>
        </div>

        {/* middle title */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, zIndex: 1, maxWidth: 920 }}>
          {type !== "default" && (
            <div
              style={{
                display: "flex",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: accent,
              }}
            >
              {type === "blog" ? "BLOG • TIPS REAL LAPANGAN" : type === "harga" ? "HARGA JUJUR • ANTI-NAWAR" : ""}
            </div>
          )}
          <div
            style={{
              fontSize: type === "default" ? 58 : 46,
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "white",
            }}
          >
            {shortTitle}
          </div>
        </div>

        {/* bottom */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 1 }}>
          <div style={{ display: "flex", gap: 12 }}>
            {["<1s LCP", "Lighthouse 100 (SEO)", "3 hari live", "50+ project"].map((s) => (
              <div
                key={s}
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#9ca3af",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "6px 12px",
                  borderRadius: 9999,
                }}
              >
                {s}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 12, color: "#6b7280", fontWeight: 600 }}>{tag}</div>
        </div>

        {/* accent line bottom */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: accent }} />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
