import { test, expect } from '@playwright/test';

test('Displays Hello World after dynamic loading completes', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

  await page.getByRole('button', { name: 'Start' }).click();

  await expect(page.getByText('Hello World!', { exact: true })).toBeVisible({ timeout: 15000 });
});
