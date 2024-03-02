// userListing.js
const assert = require('assert');
const UserListPage = require('../pageobjects/userList.page'); 
const Page = require('../pageobjects/page');
//const LoginPage = require('../pageobjects/login.page');


describe('User List Page', () => {
    it('should display user list page, click on a user, and logout', async () => {
        // Assuming there is some check to verify that the user list page is displayed
        await UserListPage.headerBar.waitForDisplayed();
        await UserListPage.searchBarIcon.waitForDisplayed();

        // Optional: Add assertions to ensure the elements are displayed as expected
        if (!(await UserListPage.headerBar.isDisplayed())) {
            throw new Error('Header bar is not displayed');
        }

        if (!(await UserListPage.searchBarIcon.isDisplayed())) {
            throw new Error('Search bar icon is not displayed');
        }

        // Click on the logout button
        await UserListPage.logoutBtn.click();

        // Optional: Add a pause for observation
        await browser.pause(5000); // Adjust the pause duration as needed

        // Additional assertions or actions based on your application behavior
        // For example, you might navigate to the user's details page and verify elements there
    });
});


