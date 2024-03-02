describe('Login page', () => {
    it('should open the app and load the login', async () => {
      // Access elements using Appium commands and WebdriverIO methods
      const loginPage = $('//android.widget.FrameLayout/android.widget.LinearLayout');
  
      // Use await to handle the promise returned by expect
      try {
        await expect(loginPage).toBeDisplayed();
        // Log information about the login page
        console.log('Login page is displayed:', loginPage.isDisplayed());
  
        // Pause for observation
        browser.pause(10000);
  
        const usernameInput = $('//android.widget.EditText[@text="Username"]');
        const passwordInput = $('//android.widget.EditText[@text="Password"]');
        const loginButton = $('//android.view.ViewGroup[@content-desc="Login"]');
  
        // Uncomment the lines below to perform actual actions
        await usernameInput.setValue('admin');
        await passwordInput.setValue('admin');
        await loginButton.click();
  
        // Add assertions to verify the state of your application
        // const welcomeMessage = $('//android.widget.TextView[@text="Welcome"]');
        // await expect(welcomeMessage).toBeDisplayed();
      } catch (error) {
        // Handle the error and fail the test explicitly
        console.error('Error:', error);
        throw error;
      }
    });
  });
  
  describe('User List', () => {
    // This hook runs before all test cases within this describe block
    before(async () => {
      // Perform actions to navigate to the User List page after successful login
      // For example:
      // await navigateToUserList();
    });
  
    it('should load elements on the User List page', async () => {
      // Test case 1: Load elements on the User List page
      // Access elements and perform actions related to loading elements
      // Example:
      const userListTitle = $('//android.widget.TextView[@text="User List"]');
      await expect(userListTitle).toBeDisplayed();
  
      // Add more assertions as needed
    });
  
    it('should search for a user and click on them', async () => {
      // Test case 2: Search for a user and click on them
      // Access elements and perform actions related to searching for a user
      // Example:
      const searchInput = $('//android.widget.EditText[@text="Search"]');
      await searchInput.setValue('desiredUserName');
  
      // Perform search and click actions
      // Example:
      const searchButton = $('//android.view.ViewGroup[@content-desc="Search"]');
      await searchButton.click();
  
      // Wait for search results and click on the desired user
      // Example:
      const desiredUser = $('//android.widget.TextView[@text="Desired User"]');
      await desiredUser.click();
  
      // Add more assertions as needed
    });
  
    // Add more test cases for the User List functionality
  });