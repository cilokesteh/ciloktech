import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();

test("jasa pembuatan website SEO landing page and routes exist", () => {
  const pagePath = path.join(rootDir, "app/jasa-pembuatan-website/page.tsx");
  assert.ok(fs.existsSync(pagePath), "app/jasa-pembuatan-website/page.tsx must exist");

  const pageContent = fs.readFileSync(pagePath, "utf8");
  assert.match(pageContent, /jasa-pembuatan-website/i);
  assert.match(pageContent, /canonical:\s*["']https:\/\/www\.ciloktech\.id\/jasa-pembuatan-website["']/);
});

test("sitemap includes /jasa-pembuatan-website with high priority", () => {
  const sitemapPath = path.join(rootDir, "app/sitemap.ts");
  const sitemapContent = fs.readFileSync(sitemapPath, "utf8");
  assert.match(sitemapContent, /\/jasa-pembuatan-website/);
});

test("footer and command palette include link to jasa pembuatan website", () => {
  const footerPath = path.join(rootDir, "components/Footer.tsx");
  const footerContent = fs.readFileSync(footerPath, "utf8");
  assert.match(footerContent, /\/jasa-pembuatan-website/);

  const cmdPath = path.join(rootDir, "components/CommandPalette.tsx");
  const cmdContent = fs.readFileSync(cmdPath, "utf8");
  assert.match(cmdContent, /jasa-pembuatan-website/);
});
