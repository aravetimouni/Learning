import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('DemoQA practice form submission with Faker data', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form/');

    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({ firstName, lastName });
    const mobile = faker.string.numeric(10);
    const currentAddress = faker.location.streetAddress();

    await page.locator('#firstName').fill(firstName);
    await page.locator('#lastName').fill(lastName);
    await page.locator('#userEmail').fill(email);

    await page.locator('label[for="gender-radio-1"]').check();
    await page.locator('#userNumber').fill(mobile);

    const dateOfBirth = faker.date.birthdate({ min: 18, max: 60, mode: 'age' });
    const dobValue = `${dateOfBirth.getDate().toString().padStart(2, '0')} ${dateOfBirth.toLocaleString('en-US', { month: 'short' })}, ${dateOfBirth.getFullYear()}`;

    await page.locator('#dateOfBirthInput').click();
    await page.locator('.react-datepicker__month-select').selectOption(String(dateOfBirth.getMonth()));
    await page.locator('.react-datepicker__year-select').selectOption(String(dateOfBirth.getFullYear()));

    const selectedDay = page.locator('.react-datepicker__day:not(.react-datepicker__day--outside-month)').filter({ hasText: String(dateOfBirth.getDate()) }).first();
    await selectedDay.click();

    const subject = 'Physics';
    await page.locator('#subjectsInput').fill('P');
    await page.getByText('Physics', { exact: true }).click();

    await page.locator('label[for="hobbies-checkbox-1"]').check();
    await page.locator('#currentAddress').fill(currentAddress);

    await page.locator('#state').click();
    await page.locator('#react-select-3-option-0').click();
    await page.locator('#city').click();
    await page.locator('#react-select-4-option-0').click();

    await page.locator('#submit').click();

    await expect(page.locator('.modal-content')).toContainText('Thanks for submitting the form');
    await expect(page.locator('.modal-content')).toContainText(firstName);
    await expect(page.locator('.modal-content')).toContainText(lastName);
    await expect(page.locator('.modal-content')).toContainText(email);
});
