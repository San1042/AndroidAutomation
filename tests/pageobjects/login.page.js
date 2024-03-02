const Page = require('./page');

// **
//  * sub page containing specific selectors and methods for a specific page
//  */

class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get inputUsername() {
        return $('//android.widget.EditText[@text="Username"]');
    }
    
    get inputPassword() {
        return $('//android.widget.EditText[@text="Password"]');
    }

    get loginHeading() {
        return $('//android.widget.TextView[@text="Login"]');
    }
    
    get loginBtn() {
        return $('//android.view.ViewGroup[@content-desc="Login"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.waitForDisplayed();
        await this.inputUsername.setValue(username);
        await this.inputPassword.waitForDisplayed();
        await this.inputPassword.setValue(password);
        await this.loginBtn.click();
    }

}

module.exports = new LoginPage();
