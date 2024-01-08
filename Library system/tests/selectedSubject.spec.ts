import { test, expect } from '@playwright/test';


test.only('Select specified subject under Dropdown List testing', async ({page}) =>{

    const title='div.large-heading';
    await page.goto('https://onlinelibrary.wiley.com/')
    //click on DropDown LIst
    const ArtApplied = await page.waitForSelector('a#accordionHeader-3'); 
    await ArtApplied.click();

    //Select specified subject under Dropdown List
    await page.getByRole('link', { name: 'Clothing & Fashion' }).click();
    await page.waitForNavigation({ timeout: 120000 });
    await page.pause()


    // const headerText = await page.textContent('div.large-heading');
    // expect(headerText).toBe('Clothing & Fashion');

    // const pdf = 'a[href="/doi/epdf/10.1002/hfm.21022"]';
    // const ViewPDF = await page.waitForSelector(pdf,{ timeout: 120000 });
    // await ViewPDF.click({ timeout: 60000 });
    // await page.pause()

})
