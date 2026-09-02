import { test, expect } from '@playwright/test';

test('Displays an error for invalid login credentials', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.locator('#username').fill('invalid_user');
  await page.locator('#password').fill('invalid_password');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('#flash')).toContainText('Your username is invalid!');
});
