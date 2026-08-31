import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("browser quality gates are wired into package scripts and CI", async () => {
  const pkg = JSON.parse(await read("package.json"));
  assert.equal(pkg.scripts.e2e, "playwright test");
  assert.equal(pkg.scripts["e2e:mobile"], "playwright test --project=mobile");
  assert.ok(pkg.devDependencies["@playwright/test"]);
  assert.ok(pkg.devDependencies["@axe-core/playwright"]);

  const ci = await read(".github/workflows/ci.yml");
  assert.match(ci, /playwright install --with-deps chromium/);
  assert.match(ci, /pnpm e2e/);
  assert.match(ci, /timeout-minutes: 20/);
});

test("critical browser flows have executable E2E coverage", async () => {
  const spec = await read("e2e/critical-flows.spec.ts");
  for (const marker of [
    "pricing brief updates",
    "telegram CTA copies the generated brief",
    "POS demo completes checkout",
    "JasaFlow demo issues a booking token",
    "has no serious accessibility violations",
    "has no horizontal overflow",
  ]) {
    assert.match(spec, new RegExp(marker));
  }
});

test("playwright defines desktop and mobile projects", async () => {
  const config = await read("playwright.config.ts");
  assert.match(config, /name: "desktop"/);
  assert.match(config, /name: "mobile"/);
  assert.match(config, /webServer/);
});
