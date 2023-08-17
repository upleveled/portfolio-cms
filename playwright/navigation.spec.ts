import { expect, test } from '@playwright/test';

test('Can find the different components in the app', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('my-hero')).toBeVisible();
  await expect(page.getByTestId('who-am-i')).toBeVisible();
  await expect(page.getByTestId('my-work')).toBeVisible();
  await expect(page.getByTestId('footer')).toBeVisible();
});
