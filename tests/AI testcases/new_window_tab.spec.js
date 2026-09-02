import { test, expect } from '@playwright/test';

test('Opens the new window in a separate tab', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/windows');

  const [newTab] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'Click Here' }).click(),
  ]);

  await expect(newTab).toHaveURL(/\/windows\/new/);
  await expect(newTab.getByText('New Window', { exact: true })).toBeVisible();
});
