import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
});

test('get started link', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
