import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("production boundaries and operational endpoints exist", async () => {
  const files = [
    "app/error.tsx",
    "app/loading.tsx",
    "app/not-found.tsx",
    "app/health/route.ts",
    "app/ready/route.ts",
    "docs/OPERATIONS.md",
  ];
  await Promise.all(files.map(read));
});

test("brand palette stays free of generic aurora/glass patterns", async () => {
  const files = [
    "app/globals.css",
    "components/HeroSection.tsx",
    "components/PricingSection.tsx",
    "components/ServicesSection.tsx",
  ];
  const source = (await Promise.all(files.map(read))).join("\n");
  assert.doesNotMatch(source, /className=["`][^"`]*\bglass\b/);
  assert.doesNotMatch(source, /className=["`][^"`]*(aurora-blob|aurora-anim|text-gradient)/);
  assert.doesNotMatch(source, /from-indigo-[^\s"`]+.*to-(violet|pink|fuchsia)-/);
});

test("every pricing plan has a working Telegram CTA", async () => {
  const pricing = await read("components/PricingSection.tsx");
  const dictionaries = await read("lib/i18n/dictionaries.ts");
  const hrefBlock = pricing.match(/const PLAN_HREFS = \[([\s\S]*?)\];/);
  assert.ok(hrefBlock, "PLAN_HREFS must exist");
  const hrefCount = (hrefBlock[1].match(/https:\/\/t\.me\//g) || []).length;
  const idPlanBlock = dictionaries.match(/const idDict = \{[\s\S]*?pricing: \{[\s\S]*?plans: \[([\s\S]*?)\n    \],/);
  assert.ok(idPlanBlock, "ID pricing plans must exist");
  const planCount = (idPlanBlock[1].match(/\n      \{/g) || []).length;
  assert.equal(hrefCount, planCount, "each pricing plan needs a Telegram href");
});

test("security headers and workflow gates are present", async () => {
  const vercel = await read("vercel.json");
  for (const header of [
    "Content-Security-Policy",
    "X-Frame-Options",
    "X-Content-Type-Options",
    "Referrer-Policy",
    "Permissions-Policy",
  ]) {
    assert.match(vercel, new RegExp(header));
  }

  const workflow = await read(".github/workflows/ci.yml");
  for (const command of ["pnpm lint", "pnpm typecheck", "pnpm test", "pnpm build", "pnpm smoke", "pnpm audit"]) {
    assert.match(workflow, new RegExp(command.replaceAll(" ", "\\s+")));
  }
});

test("secrets stay ignored while env template is tracked", async () => {
  const ignore = await read(".gitignore");
  assert.match(ignore, /^\.env\*$/m);
  assert.match(ignore, /^!\.env\.example$/m);
  const example = await read(".env.example");
  assert.doesNotMatch(example, /(?:password|secret|token)\s*=\s*\S+/i);
});
