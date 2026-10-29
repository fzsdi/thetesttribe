import { test, expect } from '@playwright/test';

// Deliberately flaky: a fixed sleep versus a random load time.
test('product list shows all three products', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(800);
  const count = await page.locator('.product').count();
  expect(count).toBe(3);
});
