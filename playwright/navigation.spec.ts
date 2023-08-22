import { expect, test } from '@playwright/test';

test('check content', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('myHero')).toBeVisible();
  await expect(page.getByTestId('whoAmI')).toBeVisible();
  await expect(page.getByTestId('myWork')).toBeVisible();
  await expect(page.getByTestId('footer')).toBeVisible();

  await page.getByRole('link', { name: 'My work' }).click();
  await page.waitForURL('/#portfolio');

  await page.getByRole('link', { name: 'Contact' }).click();
  await page.waitForURL('/#about');
});
