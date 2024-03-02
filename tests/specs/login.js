const assert = require('assert');
const Page = require('../pageobjects/page');
const LoginPage = require('../pageobjects/login.page');

describe('Login page', () => {
    it('Signin into the app', async () => {
        try {
            await LoginPage.open();
            browser.setTimeout({ implicit: 10000 });

            // Wait for the element to be displayed
            await driver.waitUntil(async () => {
                return await $('//android.widget.EditText[@text="Username"]').isDisplayed();
            }, { timeout: 10000, timeoutMsg: 'Element not displayed after 10000 ms' });

            await LoginPage.login('admin', 'admin');
        } catch (error) {
            // Handle the error as needed
            console.error('An error occurred during login:', error.message);

            // Retry mechanism (optional)
            const maxRetries = 3;
            let retries = 0;

            while (retries < maxRetries) {
                console.log(`Retrying login attempt ${retries + 1}`);
                await LoginPage.open();
                await LoginPage.login('admin', 'admin');
                retries++;
            }

            // You might want to throw the error again if you want the test to fail
            throw error;
        }
    });
});
