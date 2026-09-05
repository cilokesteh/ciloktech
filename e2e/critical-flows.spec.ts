import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

async function finishMotion(page: import("@playwright/test").Page) {
  await page.addStyleTag({ content: "*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}" });
}

test("pricing brief updates", async ({ page }) => {
  await page.goto("/harga");
  await page.getByRole("button", { name: /Web Application \/ MVP/i }).click();
  await page.getByText("Multi-Language (ID / EN)").click();
  const output = page.getByText(/RINGKASAN ESTIMASI SCOPE CILOKTECH/).locator("..");
  await expect(output).toContainText("Web Application / MVP");
  await expect(output).toContainText("Rp 2.650.000");
});

test("telegram CTA copies the generated brief", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/harga", { waitUntil: "networkidle" });
  const telegramLink = page.getByRole("link", { name: /Salin & Buka Chat Telegram/i });
  await expect(telegramLink).toHaveAttribute("href", "https://t.me/ciloktech");
  await telegramLink.click({ noWaitAfter: true });
  await expect(page.getByRole("button", { name: /Tersalin/ })).toBeVisible();
  const copied = await page.evaluate(() => navigator.clipboard.readText());
  expect(copied).toContain("RINGKASAN ESTIMASI SCOPE CILOKTECH");
  expect(copied).toContain("@ciloktech");
});

test("POS demo completes checkout", async ({ page }) => {
  await page.goto("/demo");
  const productCard = page.getByText("Overshirt Linen Stone").locator("xpath=../..");
  await productCard.getByRole("button", { name: /Tambah/ }).click();
  await page.getByRole("button", { name: /Bayar & Cetak Struk Thermal/ }).click();
  await expect(page.getByText("CHILL LOOK CONCEPT STORE", { exact: true })).toBeVisible();
  await expect(page.getByText(/No: TRX-/)).toBeVisible();
});

test("JasaFlow demo issues a booking token", async ({ page }) => {
  await page.goto("/demo", { waitUntil: "networkidle" });
  const jasaFlowTab = page.getByRole("button", { name: "✂️ JasaFlow (Booking & Antrean)", exact: true });
  await expect(jasaFlowTab).toBeEnabled();
  await jasaFlowTab.click();
  await expect(page.getByText("JasaFlow Engine (Barbershop & Clinic Booking)")).toBeVisible();
  await page.getByRole("button", { name: /Simulasi Kunci Slot Booking/ }).click();
  await expect(page.getByText("Slot Berhasil Diamankan!")).toBeVisible();
  await expect(page.getByText(/JF-[A-Z0-9]{5}/)).toBeVisible();
});

test("has no serious accessibility violations", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await finishMotion(page);
  const result = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa"])
    .analyze();
  expect(result.violations.filter((v) => ["serious", "critical"].includes(v.impact ?? ""))).toEqual([]);
});

for (const route of ["/", "/jasa-pembuatan-website", "/harga", "/demo", "/privasi"]) {
  test(`has no horizontal overflow: ${route}`, async ({ page }) => {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    await finishMotion(page);
    const dimensions = await page.evaluate(() => ({ width: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }));
    expect(dimensions.scroll, `${route} overflow`).toBeLessThanOrEqual(dimensions.width + 2);
  });
}
