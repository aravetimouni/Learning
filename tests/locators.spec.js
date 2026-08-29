import {test, expect} from '@playwright/test';

import { faker } from '@faker-js/faker';

//XPath Locator

//tagname=[@attributename='attributevalue']  --- basic syntax
test('First program',async({page})=>{

    await page.goto('https://demoqa.com/text-box');
    await page.locator('//input[@id="userName"]').fill(faker.person.fullName());
    await page.locator('//input[@id="userEmail"]').fill(faker.internet.email());
    await page.locator('//textarea[@placeholder="Current Address"]').fill(faker.location.streetAddress());
    await page.locator('//textarea[@id="permanentAddress"]').fill(faker.location.state());
    await page.locator('//button[@id="submit"]').click();
})


test('second program',async({page}) =>{
    await page.goto('https://qaplayground.com/practice/input-fields');
    await page.locator('//input[@id="movieNameInput"]').fill(faker.lorem.word());
    await page.locator('//button[@id="submitMovieBtn"]').click();
    await page.locator('//input[@id="appendInput"]').fill(faker.lorem.word());
    await page.locator('//button[@id="readValueBtn"]').click();
    await page.locator('//input[@id="clearInput"]').fill(faker.lorem.word());
    await page.locator('//button[@id="clearFieldBtn"]').click();
      
})

// tagname[text()='fulltext'] -- using text syntax

test('third program',async({page})=>{
    await page.goto('https://xpathdecoded.com/playground');
    await page.locator('//h1[text()="Login"]').highlight;

})

// tagname[contains(.,'partialtext')] -- using partial text syntax

test('fourth program',async({page})=>{
    await page.goto('https://xpathdecoded.com/playground');
    await page.locator('//p[contains(., "Test your XPath ")]').highlight();
})

//tagname[@attributename='attributevalue1]['@attributename2='attributevalue2'] 
// tagname[@attributename='attributevalue1' and '@attributename2='attributevalue2']-- using And logic


test('fifth program',async({page})=>{
    await page.goto('https://demoqa.com/text-box');
    await page.locator('//textarea[@placeholder="Current Address" and @id="currentAddress"]').fill(faker.location.streetAddress());
})



// tagname[@attributename='attributevalue1' or '@attributename2='attributevalue2']-- using OR logic


test('sixth program',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await expect(page.locator('//input[@autocorrect="off" or placeholder="Username" ]')).toHaveCount(2);
});


//tagname[starts-with(@attrname, "Prefixvalue")] --- using prefix value

test('severth program',async({page})=>{

    await page.goto('https://demoqa.com/text-box');
    let randomschar=(Math.random()+1).toString(36).substring(7);
    await page.locator('//input[starts-with(@placeholder,"Full Name")]').fill("Mounika" + randomschar);

})

//tagname[ends-with(@attrname, "Suffixvalue")] --- using suffix value
////tagname[contains(@attrname, "commonvalue")] -- using contains 

test('eighth program',async({page})=>{

    await page.goto('https://demoqa.com/text-box');
    let randomschar=(Math.random()+1).toString(36).substring(7);
    await page.locator('//input[contains(@placeholder,"Full Name")]').fill(randomschar + "Mounika");

})

//div[@id='xyz']/input  -- using parent to child relationship

test('ninth program',async({page})=>{
 await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
 await page.locator('//div[@class="products-wrapper"]/div[1]/div[2]').highlight();

})

//a[@href="xyz"]/.. -- using child to parent relationship

test('tenth program',async({page})=>{
    await page.goto('https://demoqa.com/text-box');
    await page.locator('//input[@id="userEmail"]/../../..').highlight();

});

//

// xpath  - 2 elements 

test('eleventh program',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
    await page.locator('//div[@class="products"]//div[@class="product"][9]').highlight();
})








