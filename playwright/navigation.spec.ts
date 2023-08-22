import { expect, test } from '@playwright/test';

test('check content', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('myHero')).toBeVisible();
  await expect(page.getByTestId('whoAmI')).toBeVisible();
  await expect(page.getByTestId('myWork')).toBeVisible();
  await expect(page.getByTestId('footer')).toBeVisible();
});
