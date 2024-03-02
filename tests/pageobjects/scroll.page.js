const Page = require('./page');

class Scroll extends Page {
    // Example: Scroll down
    async scrollDown() {
        await browser.executeScript('mobile: scroll', [{ direction: 'down' }]);
    }

    // Example: Scroll up
    async scrollUp() {
        await browser.executeScript('mobile: scroll', [{ direction: 'up' }]);
    }
}

module.exports = Scroll;
