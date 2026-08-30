export const runtime = "edge";
export const dynamic = "force-dynamic";

export function GET() {
  return Response.json(
    {
      status: "ok",
      service: "ciloktech-web",
      timestamp: new Date().toISOString(),
    },
    {
      status: 200,
      headers: { "cache-control": "no-store" },
    }
  );
}
