import {test , expect} from '@playwright/test'

test ("launch url", async ({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
})

test ("Go to username", async({page}) => {

 await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
 await page.getByRole('textbox' , {name : 'Username'}).fill('Admin')
 await page.getByRole('textbox', {name: 'password'}).fill('admin123')
})


test("swag labs", async({page}) => {

    await page.goto("https://www.saucedemo.com/")
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('button', { name: 'Login' }).click("Login")
    await page.getByText('Products')
})


test('ecommerce site',async({page})=>{

    test.slow()
    await page.goto("https://demo.opencart.com/")
    
    await page.getByRole('link', { name: 'Tablets', exact: true }).first()
    await page.getByRole('button', { name: 'Add to Cart' })
    await page.getByRole('button', { name: '1 item(s) - $241.99' })   
})

// test('First program', async({page})  => {
//  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//  await page.getByPlaceholder('Username').fill('Admin')
//  await page.getByPlaceholder('Password').fill('admin123')
//  await page.getByRole('button', {name:'Login'}).click()
//  await page.getByText('Dashboard', { exact: true }).nth(1)

// })





