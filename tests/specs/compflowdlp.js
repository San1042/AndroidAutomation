const assert = require('assert');
const UserListPage = require('../pageobjects/userList.page'); 
const Page = require('../pageobjects/page');
const LoginPage = require('../pageobjects/login.page');
const Scroll = require('../pageobjects/scroll.page');
const UsersProfile = require('../pageobjects/usersProfile.page');
//const { touchAction } = require('webdriverio').default;
//const { browser } = require('webdriverio');

describe('Complete Test Suite', () => {
    it('End to End Automation', async () => {
        try {

            //login flow start
            await LoginPage.open();
            browser.setTimeout({ implicit: 10000 });
            await LoginPage.login('admin', 'admin');
            //login complete above

            //homepage display 
            await UserListPage.searchBarIcon.waitForDisplayed();
            await UserListPage.searchUser.waitForDisplayed();
            await UserListPage.userListing.waitForDisplayed();
            await browser.pause(5000); 


            await UserListPage.userDisplayGroup.click();  //clicking on the user card
            await browser.pause(5000); 

            //user profile page
            await UsersProfile.edit('sanchit@gmail.com','sanchit'); //editing user email and name
            await browser.pause(2000); 

            //await scroll.scrollDown();
            //await browser.pause(2000);

            await UsersProfile.saveBtn.click();  //saving changes made to user profile
            //await browser.pause(20000); 
            await UsersProfile.confirmBtn.click();  //confirming changes to user profile
            await browser.pause(15000);

            //homepage
            await UserListPage.search('sanchit');  //searching updated name for the user
            await browser.pause(2000);

            await UserListPage.logoutBtn.click(); //logout application

            
        } catch (error) {
            // Handle the error as needed
            console.error('An error occurred during login:', error.message);
            // You might want to throw the error again if you want the test to fail
            throw error;
        }
    });
});
