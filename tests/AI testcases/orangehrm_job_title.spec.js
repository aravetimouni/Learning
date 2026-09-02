import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('OrangeHRM login and add job title with faker data', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/.*dashboard/i);
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

    await page.getByText('Admin').first().click();
    await page.getByText('Job', { exact: true }).click();
    await page.getByText('Job Titles').click();

    await page.getByRole('button', { name: 'Add' }).click();

    const jobTitle = faker.person.jobTitle();
    const jobDescription = faker.lorem.paragraph(2);

    await page.locator('input.oxd-input').nth(1).fill(jobTitle);
    await page.locator('textarea.oxd-textarea').first().fill(jobDescription);
    await page.getByRole('button', { name: 'Save' }).click();

    const successMessage = page.getByText('Successfully Saved');
    await expect(successMessage).toBeVisible({ timeout: 20000 });
    await expect(successMessage).toContainText('Successfully Saved');
});
