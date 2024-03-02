const assert = require('assert');
const UserListPage = require('../pageobjects/userList.page'); 
const Page = require('../pageobjects/page');
const LoginPage = require('../pageobjects/login.page');

describe('Login and User List Pages', () => {
    it('Signin into the app and navigate to user list', async () => {
        try {
            await LoginPage.open();
            browser.setTimeout({ implicit: 10000 });
            
            await LoginPage.login('admin', 'admin');

            
            
            // Assuming there is some check to verify successful login
            //assert.ok(UserListPage.headerBar.isDisplayed(), 'Header bar is not displayed');
            //assert.ok(UserListPage.searchBarIcon.isDisplayed(), 'Search bar icon is not displayed');

            //await UserListPage.headerBar.waitForDisplayed();
            await UserListPage.searchBarIcon.waitForDisplayed();

            browser.pause(50000);

            console.log('Is logoutBtn displayed:', UserListPage.logoutBtn.isDisplayed());
            console.log('Is logoutBtn clickable:', UserListPage.logoutBtn.isClickable());
            
            await UserListPage.logoutBtn.click();


            // Click on the user in the list using userDisplayGroup
            //UserListPage.clickUser();

            // Additional assertions or actions based on your application behavior
            // For example, you might navigate to the user's details page and verify elements there

        } catch (error) {
            // Handle the error as needed
            console.error('An error occurred during login:', error.message);
            
            // // Retry mechanism (optional)
            // const maxRetries = 3;
            // let retries = 0;

            // while (retries < maxRetries) {
            //     console.log(`Retrying login attempt ${retries + 1}`);
            //     await LoginPage.open();
            //     await LoginPage.login('admin', 'admin');
            //     retries++;
            // }

            // You might want to throw the error again if you want the test to fail
            throw error;
        }
    });
});
