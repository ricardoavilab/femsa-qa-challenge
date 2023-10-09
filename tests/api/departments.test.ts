import { expect, test } from '@playwright/test';

test('get departments @api', async ({ request }) => {
  expect(request).toBeDefined();
});
