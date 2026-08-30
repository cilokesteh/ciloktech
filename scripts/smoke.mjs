import { spawn } from "node:child_process";

const port = Number(process.env.SMOKE_PORT || 4317);
const base = `http://127.0.0.1:${port}`;
const server = spawn("pnpm", ["exec", "next", "start", "-p", String(port)], {
  stdio: ["ignore", "pipe", "pipe"],
  env: { ...process.env, NODE_ENV: "production" },
});

let logs = "";
server.stdout.on("data", (chunk) => { logs += chunk.toString(); });
server.stderr.on("data", (chunk) => { logs += chunk.toString(); });

async function waitReady() {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const response = await fetch(`${base}/health`, { cache: "no-store" });
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  throw new Error(`server_not_ready\n${logs}`);
}

const checks = [
  ["/", 200, "Cilok Tech"],
  ["/blog", 200, "Blog"],
  ["/harga", 200, "Harga"],
  ["/health", 200, '"status":"ok"'],
  ["/ready", 200, '"status":"ready"'],
  ["/robots.txt", 200, "Sitemap:"],
  ["/sitemap.xml", 200, "<urlset"],
  ["/path-yang-tidak-ada", 404, "Halaman ini tidak ada"],
];

try {
  await waitReady();
  for (const [path, expectedStatus, marker] of checks) {
    const response = await fetch(`${base}${path}`, { redirect: "manual" });
    const body = await response.text();
    if (response.status !== expectedStatus || !body.includes(marker)) {
      throw new Error(`${path}: expected ${expectedStatus} + ${marker}, got ${response.status}`);
    }
    console.log(`PASS ${path} ${response.status}`);
  }

  const validMetric = await fetch(`${base}/api/vitals`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ id: "smoke", name: "LCP", value: 1200, rating: "good", navigationType: "navigate" }),
  });
  if (validMetric.status !== 204) throw new Error(`vitals valid expected 204, got ${validMetric.status}`);
  console.log("PASS /api/vitals valid 204");

  const invalidMetric = await fetch(`${base}/api/vitals`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ name: "BOGUS" }),
  });
  if (invalidMetric.status !== 422) throw new Error(`vitals invalid expected 422, got ${invalidMetric.status}`);
  console.log("PASS /api/vitals invalid 422");
} finally {
  server.kill("SIGTERM");
}
