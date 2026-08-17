import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Cilok Tech — One-Man Studio";
  const subtitle = searchParams.get("subtitle") || "ONE-MAN STUDIO • SENIOR FULL-STACK • INDONESIA";
  const tag = searchParams.get("tag") || "ciloktech.web.id • One-Man Studio";
  const type = searchParams.get("type") || "default"; // default | blog | harga

  // truncate title for OG
  const shortTitle = title.length > 80 ? title.slice(0, 77) + "..." : title;

  const bg = type === "blog" ? "#0a0a0a" : type === "harga" ? "#111827" : "#0a0a0a";
  const accent = type === "harga" ? "#f59e0b" : "#06b6d4";

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
                WEB.ID
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
