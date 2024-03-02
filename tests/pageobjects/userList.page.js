const Page = require('./page');

class UserListPage extends Page {
    
    // **
//  * sub page containing specific selectors and methods for a specific page
//  */

    get headerBar() {
        return $(
            `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/
            android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/
            android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/
            android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/
            android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]]`
        );
    }

    get adminText() {
        return $('//android.widget.TextView[@text="Hi, admin"]');
    }
    
    get employeeText() {
        return $('//android.widget.TextView[@text="Employees"]');
    }

    get searchBarIcon() {
        return $('//android.widget.TextView[@text=""]');
    }

    get searchUser() {
        return $('//android.widget.EditText[@text="Search users..."]');
    }

    get footerBar() {
        return $(
            `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout` +
            `/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup` +
            `/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout` +
            `/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup` +
            `/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup` +
            `/android.view.ViewGroup[2]/android.view.ViewGroup[2]`
        );
    }
    
    get maleBtn() {
        return $('//android.view.ViewGroup[@content-desc="Male"]');
    }

    get femaleBtn() {
        return $('//android.view.ViewGroup[@content-desc="Female"]');
    }

    get userDisplayGroup() {
    return $('.android.view.ViewGroup');
}
    

    get userListing() {
        return $('//android.widget.HorizontalScrollView');
    }
    

    get logoutBtn() {
        return $('//android.view.ViewGroup[@content-desc="Logout"]');
    }

    get userProfilePage() {
        return $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup');
    }


    clickUser() {
        // Click on the user display group
        this.userDisplayGroup.click();
    }

    /**
     * A method to encapsulate automation code to interact with the page
     * e.g., to click on a user in the list
     */
    async search(name) {
        await this.searchUser.waitForDisplayed();
        await this.searchUser.setValue(name);
    }

    // searchUser(userName) {
    //     this.searchUser.setValue(userName);
    //     // Additional code to trigger the search action, e.g., pressing Enter
    //     this.searchUser.keys('Enter');
    // }

}

module.exports = new UserListPage();
