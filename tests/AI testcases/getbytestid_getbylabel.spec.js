import { test, expect } from '@playwright/test';

test('Uses getByLabel and getByTestId together', async ({ page }) => {
  await page.setContent(`
    <form onsubmit="event.preventDefault()">
      <label for="email">Email</label>
      <input id="email" type="email" />
      <button type="submit" data-testid="submit-button">Submit</button>
    </form>
  `);

  await page.getByLabel('Email').fill('user@example.com');
  await expect(page.getByTestId('submit-button')).toBeVisible();
  await page.getByTestId('submit-button').click();

  await expect(page.getByLabel('Email')).toHaveValue('user@example.com');
});
