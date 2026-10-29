import { test, expect } from '@playwright/test';

test('user can add an item and check out', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  await expect(page.locator('#cart-count')).toHaveText('1');
  await page.locator('#checkout-btn').click();
  await expect(page.locator('#message')).toHaveText('Order placed');
});

test('checkout: shows empty-cart message when cart has no items', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Checkout' }).click();
  await expect(page.getByText('Cart is empty')).toBeVisible();
});
