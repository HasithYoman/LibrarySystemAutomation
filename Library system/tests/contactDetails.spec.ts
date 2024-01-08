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

