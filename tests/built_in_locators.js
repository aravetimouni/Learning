import {test, expect} from '@playwright/test';

//placeholder --- this can be used only for the input fields which contains placeholder attribute in the HTML code.

//when we want to automate in several language means we cant use this locator

test ("login to swag labs using placeholder locator", async ({page}) => {

    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByTestId('login-button').click();
});


//getbyalttext --- this can be used only for the image which contains alt attribute in the HTML code.

test ("Login to wipro page", async ({page}) =>{

    await page.goto("https://www.wipro.com/");
    await page.getByAltText("Wipro Logo").tobevisible();
    await page.getbyplaceholder("First Name").fill("Mounika");
    await page.getbyplaceholder("Last Name").fill("M");
    await page.getbyplaceholder("Work Email").fill("mounika.m@wipro.com");
    await page.getbyplaceholder("Job Title").fill("Tester");
    await page.getbyplaceholder("Company").fill("wipro");

})

//getbytest -- to locate any element based on the element

test("Login to OrangeHRM page", async ({page}) =>{
  
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByText("Login").click();

})

//getbyLabel --- to locate any element based on the label text

test("Login to OrangeHRM page using label", async ({page}) =>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByLabel("Username").fill("Admin");
    await page.getByLabel("Password").fill("admin123");
    await page.getByText("Login").click();

})

//getbytitle --- to locate any element based on the title attribute

test("Login to playwright document page using title", async ({page}) =>{

    await page.goto("https://playwright.dev/");
    await page.getByTitle("Playwright").toBeVisible();

})

//getbytestid --- to locate any element based on the testid attribute

test("testcase using testid", async ({page}) =>{

    await page.goto("https://www.atlassian.com/software/trello");
    await page.getByTestId("set-gcm-script").toBeVisible();


})


//getbyrole --- to locate any element based on the role attribute

test("testcase using role", async ({page}) =>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByRole("textbox",{name:"Username"}).fill("Admin");
    await page.getByRole("textbox",{name:"Password"}).fill("admin123");
    await page.getByRole("button",{name:"Login"}).click();

})
    