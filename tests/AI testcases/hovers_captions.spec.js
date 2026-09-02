import { test, expect } from '@playwright/test';

test('Displays a caption when hovering over each image', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/hovers');

  const figures = page.locator('.figure');
  await expect(figures).toHaveCount(3);

  for (let index = 0; index < 3; index += 1) {
    const figure = figures.nth(index);
    await figure.locator('img').hover();
    await expect(figure.locator('.figcaption')).toBeVisible();
    await expect(figure.locator('.figcaption')).toContainText('name: user');
  }
});
