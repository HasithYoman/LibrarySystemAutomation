import { test, expect } from '@playwright/test';


test.only('Verify the contact details is available', async ({page}) =>{

    
    await page.goto('https://onlinelibrary.wiley.com/');
    const contactUsLinkSelector = 'a[href="https://hub.wiley.com/community/support/onlinelibrary"]';
    const selectContactLink = await page.waitForSelector(contactUsLinkSelector,{ timeout: 120000 });
    await selectContactLink.click({ timeout: 60000 });
    

    await page.getByRole('button', { name: 'Contact Support' }).click(); 
    await page.getByRole('tab', { name: 'Call Now' }).click();
   
 
    await page.pause()

})
// Click on the button with role 'button' and name 'Contact Support'
//     await page.getByRole('button', { name: 'Contact Support' }).click();

// // Click on the tab with role 'tab' and name 'Call Now'
// await page.getByRole('tab', { name: 'Call Now' }).click();


 // const contactSupport=await page.waitForSelector('//*[@id="contactSupport"]/button');
    // await contactSupport.click({ timeout: 60000 });
    // const CallNow=await page.waitForSelector('span.title[data-aura-rendered-by="528:0"]');
    // await CallNow.click({ timeout: 60000 });



// await page.getByRole('button', { name: 'Contact Support' }).click(); 
//      await page.getByRole('button', { name: 'LOGIN' }).click();

//      const usernameInput = await page.waitForSelector('input[name="username"]');
//     await usernameInput.type('hasithyoman2@gmail.com');

//     const passwordInput = await page.waitForSelector('input[name="password"]');
//     await passwordInput.type('Hasithyoman123@');

//     const submitButton = await page.waitForSelector('button#login-button-default'); 
//     await submitButton.click({ timeout: 120000 });
