import { test, expect } from '@playwright/test';

test('Adds a new task and updates the TodoMVC counter', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  const task = 'Complete Playwright automation task';
  const newTaskInput = page.getByPlaceholder('What needs to be done?');
  await newTaskInput.fill(task);
  await newTaskInput.press('Enter');

  await expect(page.locator('.todo-list li')).toContainText(task);
  await expect(page.locator('.todo-count')).toContainText('1 item left');
});
