import { defineConfig, devices } from '@playwright/test';
import { URL_SAUCEDEMO } from "./dat-provider";

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
    headless: false,
    baseURL: URL_SAUCEDEMO,
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'api',
    },
  ],
});
