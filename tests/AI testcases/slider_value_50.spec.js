import { test, expect } from '@playwright/test';

test('Moves the slider to value 50', async ({ page }) => {
  await page.goto('https://demoqa.com/slider');

  const slider = page.locator('input[type="range"]');
  await slider.fill('50');

  await expect(slider).toHaveValue('50');
});
