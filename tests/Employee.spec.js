import { test, expect } from '@playwright/test';

import data from '../testdata/login.json'

import { faker } from '@faker-js/faker';
import { only } from 'node:test';


test('Adding Employee Details', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(data.Username);
  await page.getByRole('textbox', { name: 'Password' }).fill(data.Password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Jaasritha');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('B');
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('123456');
  await page.getByRole('button', { name: 'Save' }).click();
});


test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Saci');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Sre');
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('135');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('heading', { name: 'Personal Details' }).click();
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
});


test ('Adding personal Details', async ({ page }) => {
  await page.goto('https://demoqa.com/login');
  await page.getByText('Elements').click();
  await page.getByRole('link', { name: 'Text Box' }).click();
  //await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill(faker.person.fullName());
  //await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill(faker.internet.email());
  //await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill(faker.location.streetAddress());
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('Andrapradesh');
  await page.locator('#permanentAddress').press('ArrowDown');
  await page.locator('.col-12.mt-4.col-md-3.col-xl-3').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  //await expect(page.getByText('Name:Sister')).toBeVisible();
});

test('Add the details in Register form', async ({ page }) => {
  await page.goto('https://qa-practice.razvanvancea.ro/register.html');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Satheesh');
  await page.getByRole('textbox', { name: 'Last Name Phone number Country' }).click();
  await page.getByRole('textbox', { name: 'Last Name Phone number Country' }).fill('B');
  await page.getByRole('textbox', { name: 'Enter phone number' }).click();
  await page.getByRole('textbox', { name: 'Enter phone number' }).fill('1234567891');
  await page.locator('#countries_dropdown_menu').selectOption('India');
  await page.getByRole('textbox', { name: 'Enter email' }).click();
  await page.getByRole('textbox', { name: 'Enter email' }).fill('retijrjtrij@gmail.com');
  await page.getByRole('textbox', { name: 'Enter email' }).press('ArrowDown');
  await page.getByText('Home Contact Register Form').click();
  await page.locator('body').press('ArrowDown');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Mnbvgcyewg');
  await page.getByRole('checkbox', { name: 'I agree with the terms and' }).check();
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.getByText('The account has been')).toBeVisible();
});

test('To enter the details', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Need to learn playwright');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Need to write automation scripts');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Need to change the job ');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await expect(page.getByText('Need to change the job')).toBeVisible();
  await expect(page.getByText('Need to write automation')).toBeVisible();
  await expect(page.getByText('Need to learn playwright')).toBeVisible();
});

test('To delete the employee details', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('12345');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('button', { name: 'Search' }).press('ArrowDown');
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(4).click();
  await expect(page.getByRole('button', { name: ' Yes, Delete' })).toBeVisible();
  await page.getByRole('button', { name: ' Yes, Delete' }).click();
  await page.locator('body').press('ArrowDown');
  await page.locator('div').filter({ hasText: 'Employee InformationEmployee' }).nth(3).click();
 });

 test('edit employee', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admina');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('135');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('button', { name: 'Search' }).press('ArrowDown');
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Srees');
  await page.getByRole('textbox', { name: 'Last Name' }).press('ArrowDown');
  await page.getByText('Nationality-- Select --Marital Status-- Select --').click();
  await page.getByText('-- Select --').nth(1).press('ArrowDown');
  await page.getByText('Other').nth(1).press('ArrowDown');
  await page.locator('div').filter({ hasText: 'Personal' }).nth(3).click();
  await page.locator('body').press('ArrowDown');
  await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').click();
  await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').press('ArrowUp');
  await page.getByRole('link', { name: 'Personal Details' }).click();
  await page.getByRole('link', { name: 'Personal Details' }).click();
  await expect(page.getByRole('heading', { name: 'Sachi Sree' })).toBeVisible();
});



