import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  timeout: 30_000,
  expect: { timeout: 8_000 },
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["line"], ["html", { open: "never" }]] : "line",
  use: {
    baseURL: "http://127.0.0.1:4318",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    launchOptions: {
      // Only override when explicitly set (local dev with system Chrome).
      // In CI, Playwright's own installed Chromium must be used — a hardcoded
      // fallback path made every e2e test fail to launch in GitHub Actions.
      ...(process.env.PLAYWRIGHT_CHROME_PATH
        ? { executablePath: process.env.PLAYWRIGHT_CHROME_PATH }
        : {}),
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    },
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", use: { ...devices["Pixel 5"] } },
  ],
  webServer: {
    command: "pnpm exec next start -p 4318",
    url: "http://127.0.0.1:4318/health",
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
