import { test, expect } from '@playwright/test';

test('SauceDemo products are sorted by price', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.locator('.inventory_list')).toBeVisible();

  await page.locator('.product_sort_container').selectOption('lohi');

  const priceTexts = await page.locator('.inventory_item_price').allTextContents();
  const prices = priceTexts.map((priceText) => Number.parseFloat(priceText.replace('$', '')));
  const sortedPrices = [...prices].sort((firstPrice, secondPrice) => firstPrice - secondPrice);

  expect(prices).toEqual(sortedPrices);
});
