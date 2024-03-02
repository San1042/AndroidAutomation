module.exports = class Page {
    open() {
        // Check if browser.config is defined
        if (!browser.config) {
            console.error('browser.config is undefined. Make sure the browser is initialized.');
            return this; // Return the Page Object for method chaining
        }

        // Access the browser object to get the configuration
        const appPath = browser.config.capabilities[0]?.['appium:app'];

        // Now you can use the appPath variable as needed
        console.log('App Path:', appPath);

        // You might perform additional setup specific to your mobile app here

        return this; // Return the Page Object for method chaining
    }
};
