import { test, expect } from '@playwright/test';

test('Removes the checkbox and confirms the action', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_controls');

  const checkbox = page.locator('#checkbox');
  await expect(checkbox).toBeVisible();

  await page.getByRole('button', { name: 'Remove' }).click();

  await expect(checkbox).toBeHidden({ timeout: 10000 });
  await expect(page.locator('#message')).toHaveText('It\'s gone!');
});
