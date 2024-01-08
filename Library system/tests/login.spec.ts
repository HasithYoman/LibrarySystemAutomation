import { test, expect } from '@playwright/test';


test.only('Login Function Test', async ({page}) =>{

    await page.goto('https://onlinelibrary.wiley.com/')
    const loginButton = await page.waitForSelector('a.show-login');

    await loginButton.click();

    const usernameInput = await page.waitForSelector('input#username.login');
    await usernameInput.type('hasithyoman2@gmail.com');

    const passwordInput = await page.waitForSelector('input#password.password');
    await passwordInput.type('Hasithyoman123@');

    const submitButton = await page.waitForSelector('input[type="submit"][value="Log In"].accessSubmit'); 
    await submitButton.click({ timeout: 120000 });
    //await page.waitForNavigation({ });
    await page.pause();

    

})