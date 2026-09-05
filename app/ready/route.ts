import { validateEnv } from "@/lib/env";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export function GET() {
  try {
    const validatedEnv = validateEnv();
    return Response.json(
      {
        status: "ready",
        service: "ciloktech-web",
        environment: process.env.NODE_ENV || "development",
        siteUrl: validatedEnv.NEXT_PUBLIC_SITE_URL,
        timestamp: new Date().toISOString(),
      },
      {
        status: 200,
        headers: { "cache-control": "no-store" },
      }
    );
  } catch (error) {
    return Response.json(
      {
        status: "not_ready",
        service: "ciloktech-web",
        error: error instanceof Error ? error.message : "Configuration validation error",
        timestamp: new Date().toISOString(),
      },
      {
        status: 503,
        headers: { "cache-control": "no-store" },
      }
    );
  }
}
