import {test, expect} from '@playwright/test';

import data from "../testdata/login.json"
import data1 from "../testdata/Job.json"

import { faker } from '@faker-js/faker';

test("verfiy the username", async({page}) =>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByRole('textbox',{name:"Username"}).fill(data.Username)
    await page.getByRole('textbox',{name:"Password"}).fill(data.Password)

})

test("My program", async ({page}) => {

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  await page.getByRole('textbox', { name: 'Username' }).fill(data.Username)
  await page.getByRole('textbox', { name: 'Password' }).fill(data.Password)
 await page.getByRole('button', { name: 'Login' }).click()
   await page.getByText('Admin').first().click()
  await page.getByText('Job', { exact: true }).click()
  await page.getByText('Job Titles').click()
  await page.getByRole('button', { name: 'Add' }).click()
  //let randomschar=(Math.random()+1).toString(36).substring(7);  -- instead of JS now we are using faker library to generate the random data
  await page.locator("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']").fill(faker.person.jobTitle())
  await page.locator("//textarea[@placeholder='Type description here']").fill(data1.JobDescription)
  await page.getByRole('textbox', { name: 'Add note' }).fill(data1.Notes)
  await page.getByRole('button', { name: 'Save' }).click()
  
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList')
  
  


})


