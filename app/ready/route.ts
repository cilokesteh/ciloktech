export const runtime = "edge";
export const dynamic = "force-dynamic";

export function GET() {
  return Response.json(
    {
      status: "ready",
      service: "ciloktech-web",
      dependencies: [],
      timestamp: new Date().toISOString(),
    },
    {
      status: 200,
      headers: { "cache-control": "no-store" },
    }
  );
}
