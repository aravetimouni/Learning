import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Delete all rows and add a new employee in demoqa web tables', async ({ page }) => {
    await page.goto('https://demoqa.com/webtables');

    const deleteButtons = page.locator('span[title="Delete"]');
    const deleteCount = await deleteButtons.count();

    for (let i = 0; i < deleteCount; i++) {
        await deleteButtons.first().click();
    }

    await page.getByRole('button', { name: 'Add' }).click();

    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const age = faker.number.int({ min: 18, max: 65 }).toString();
    const email = faker.internet.email({ firstName, lastName });
    const salary = faker.number.int({ min: 30000, max: 200000 }).toString();
    const department = faker.commerce.department();

    await page.locator('#firstName').fill(firstName);
    await page.locator('#lastName').fill(lastName);
    await page.locator('#age').fill(age);
    await page.locator('#userEmail').fill(email);
    await page.locator('#salary').fill(salary);
    await page.locator('#department').fill(department);
    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page.locator('body')).toContainText(firstName, { timeout: 15000 });
    await expect(page.locator('body')).toContainText(lastName, { timeout: 15000 });
    await expect(page.locator('body')).toContainText(age, { timeout: 15000 });
    await expect(page.locator('body')).toContainText(email, { timeout: 15000 });
    await expect(page.locator('body')).toContainText(salary, { timeout: 15000 });
    await expect(page.locator('body')).toContainText(department, { timeout: 15000 });
});


