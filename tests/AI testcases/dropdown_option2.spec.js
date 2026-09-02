import { test, expect } from '@playwright/test';

test('Selects Option 2 from the dropdown', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');

  const dropdown = page.locator('#dropdown');
  await dropdown.selectOption({ label: 'Option 2' });

  await expect(dropdown).toHaveValue('2');
  await expect(dropdown.locator('option:checked')).toHaveText('Option 2');
});
