import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { validateEnv } from "../lib/env.ts";

const rootDir = process.cwd();

test("fail-fast runtime config validates environment variables", () => {
  const envConfig = validateEnv();
  assert.ok(envConfig.NEXT_PUBLIC_SITE_URL, "NEXT_PUBLIC_SITE_URL must exist");
  assert.match(envConfig.NEXT_PUBLIC_SITE_URL, /^https?:\/\//, "NEXT_PUBLIC_SITE_URL must be a valid URL");
});

test("privacy policy and UU PDP route exist", () => {
  const privasiPath = path.join(rootDir, "app/privasi/page.tsx");
  assert.ok(fs.existsSync(privasiPath), "app/privasi/page.tsx must exist");
  const content = fs.readFileSync(privasiPath, "utf8");
  assert.match(content, /UU PDP/i, "Must cite UU PDP");
  assert.match(content, /3\s*[x×]\s*24\s*jam/i, "Must declare 3x24h breach notification");
});

test("footer links to privacy policy", () => {
  const footerPath = path.join(rootDir, "components/Footer.tsx");
  const footerContent = fs.readFileSync(footerPath, "utf8");
  assert.match(footerContent, /\/privasi/, "Footer must link to /privasi");
});
