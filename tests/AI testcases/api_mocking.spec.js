import { test, expect } from '@playwright/test';

test('Displays mocked data instead of the live API response', async ({ page }) => {
  const mockedFruits = [
    { name: 'Mock Apple', id: 101 },
    { name: 'Mock Banana', id: 102 },
  ];

  await page.route('**/api/v1/fruits', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(mockedFruits),
    });
  });

  await page.goto('https://demo.playwright.dev/api-mocking');

  await expect(page.getByText('Mock Apple', { exact: true })).toBeVisible();
  await expect(page.getByText('Mock Banana', { exact: true })).toBeVisible();
  await expect(page.getByText('Strawberry', { exact: true })).not.toBeVisible();
});
