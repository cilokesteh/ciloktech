import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("large interactive views keep fixtures and pricing rules outside JSX components", async () => {
  const [pricing, demo, pricingData, demoData] = await Promise.all([
    read("components/PricingCalculator.tsx"),
    read("components/DemoSandbox.tsx"),
    read("lib/pricing-config.ts"),
    read("lib/demo-fixtures.ts"),
  ]);

  assert.doesNotMatch(pricing, /const BASE_PLANS/);
  assert.doesNotMatch(pricing, /const AVAILABLE_ADDONS/);
  assert.match(pricingData, /export const BASE_PLANS/);
  assert.match(pricingData, /export const AVAILABLE_ADDONS/);

  assert.doesNotMatch(demo, /const POS_SAMPLE_MENU/);
  assert.doesNotMatch(demo, /const BARBER_SERVICES/);
  assert.match(demoData, /export const POS_SAMPLE_MENU/);
  assert.match(demoData, /export const BARBER_SERVICES/);
});
