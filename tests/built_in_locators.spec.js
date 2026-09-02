import {test, expect} from '@playwright/test';

//placeholder --- this can be used only for the input fields which contains placeholder attribute in the HTML code.

//when we want to automate in several language means we cant use this locator

test ("login to swag labs using placeholder locator", async ({page}) => {

    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
});


//getbyalttext --- this can be used only for the image which contains alt attribute in the HTML code.

test ("Login to wipro page", async ({page}) =>{

    await page.goto("https://www.wipro.com/");
    await page.getByAltText("Wipro Logo").click();
    await page.getByPlaceholder("First Name").fill("Mounika");
    await page.getByPlaceholder("Last Name").fill("M");
    await page.getByPlaceholder("Work Email").fill("mounika.m@wipro.com");
    await page.getByPlaceholder("Job Title").fill("Tester");
    await page.getByPlaceholder("Company").fill("wipro");

})


// OrangeHRM's login inputs have no associated labels, so role locators are used here.

test("Login to OrangeHRM page using label", async ({page}) =>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByRole('textbox', { name: "Username" }).fill("Admin");
    await page.getByRole('textbox', { name: "Password" }).fill("admin123");
    await page.getByRole('button', { name: "Login" }).click();
    await expect(page).toHaveURL(/dashboard/);

})

//getbytitle --- to locate any element based on the title attribute

test("Login to playwright document page using title", async ({page}) =>{

    await page.goto("https://playwright.dev/");
    await expect(page.getByTitle("Playwright")).toHaveCount(1);

})

// getByTestId locates an element by its data-testid attribute.


test("Trello page loads successfully", async ({page}) =>{

    await page.goto("https://www.atlassian.com/software/trello");
    await expect(page).toHaveTitle(/Transform Your Workflow with Trello/);


})


