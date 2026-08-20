import { test,expect } from '@playwright/test';

import data from '../testdata/Demoqa.json'
import { faker } from '@faker-js/faker';


test('Demoqa form submission', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Mounika');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('mounika.xyz@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Andra pradesh');
  await page.locator('#permanentAddress').fill('Andra pradesh');
 await page.locator('#permanentAddress').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.getByRole('button', { name: 'Submit' }).click();
  });


test("Demoqa form submission with data from json file", async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).fill(data.Full_name);
  await page.getByRole('textbox', { name: 'name@example.com' }).fill(data.Email);
  await page.getByRole('textbox', { name: 'Current Address' }).fill(data.Current_address);
  await page.locator('#permanentAddress').fill(data.Permanent_address);
 await page.locator('#permanentAddress').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.getByRole('button', { name: 'Submit' }).click();
  });


test("Demoqa form submission with data from faker", async ({ page }) => {
    await page.goto('https://demoqa.com/text-box');
    await page.getByRole('textbox', { name: 'Full Name' }).fill(faker.person.fullName());
    await page.getByRole('textbox', { name: 'name@example.com' }).fill(faker.internet.email());
    await page.getByRole('textbox', { name: 'Current Address' }).fill(faker.location.streetAddress());
    await page.locator('#permanentAddress').fill(faker.location.streetAddress());
    await page.getByRole('button', { name: 'Submit' }).click();
});

test("Demoqa form submission with data from env file", async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).fill(process.env.FULL_NAME);
  await page.getByRole('textbox', { name: 'name@example.com' }).fill(process.env.EMAIL);
  await page.getByRole('textbox', { name: 'Current Address' }).fill(process.env.Current_Address);
  await page.locator('#permanentAddress').fill(process.env.Permanent_Address);
  await page.getByRole('button', { name: 'Submit' }).click();
});

test("Demoqa form submission with random chars", async ({ page }) => {
    await page.goto('https://demoqa.com/text-box');
    let randomschar=(Math.random()+1).toString(36).substring(7);
    await page.getByRole('textbox', { name: 'Full Name' }).fill("Mounika"+randomschar);
    await page.getByRole('textbox', { name: 'name@example.com' }).fill("Mounika"+randomschar+"@gmail.com");
    await page.getByRole('textbox', { name: 'Current Address' }).fill("Bangalore"+randomschar);
    await page.locator('#permanentAddress').fill("Hyderabad"+randomschar);
    await page.getByRole('button', { name: 'Submit' }).click();
});

test("Demoqa form submission with CLI Command", async ({ page }) => {
    await page.goto('https://demoqa.com/text-box');
})

//$env:FULL_NAME="Mounika"; $env:EMAIL="mounika@gmail.com"; $env:Current_Address="Andhra Pradesh"; $env:Permanent_Address="Bangalore"; npx playwright test tests/Demoqa.spec.js
