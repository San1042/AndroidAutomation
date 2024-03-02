// UserList.page.js
const Page = require('./page');

class UsersProfile extends Page {

    // **
//  * sub page containing specific selectors and methods for a specific page
//  */

    get headerBar() {
        return $(
            '//android.widget.FrameLayout[@resource-id="android:id/content"]' +
            '/android.widget.FrameLayout/android.view.ViewGroup[2]' +
            '/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]'
        );
    }
    

    get usersScreen() {
        return $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup');
    }
    
    get fieldEmail() {
        return $('android.widget.EditText');
    }

    get fieldName() {
        return $$('android.widget.EditText')[1];
    }

    get saveBtn() {
        return $('//android.view.ViewGroup[@content-desc="Save"]');
    }

    get confirmBtn() {
        return $('//android.view.ViewGroup[@content-desc="Confirm"]');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to search for user in the list
     */
    
    async edit(email,name) {
        await this.fieldEmail.waitForDisplayed();
        await this.fieldEmail.setValue(email);
        await this.fieldName.waitForDisplayed();
        await this.fieldName.setValue(name);
    }

    
}

module.exports = new UsersProfile();
