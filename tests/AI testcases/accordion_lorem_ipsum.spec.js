import { test, expect } from '@playwright/test';

test('Expands the What is Lorem Ipsum? accordion section', async ({ page }) => {
  await page.goto('https://demoqa.com/accordian');

  const section = page.locator('.accordion-item').filter({ hasText: 'What is Lorem Ipsum?' });
  const sectionHeading = section.getByRole('button', { name: 'What is Lorem Ipsum?' });
  const sectionContent = section.locator('.accordion-body');

  if (await sectionHeading.getAttribute('aria-expanded') !== 'true') {
    await sectionHeading.click();
  }
  await expect(sectionContent).toBeVisible();
  await expect(sectionContent).toContainText('Lorem Ipsum');
});
