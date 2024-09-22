const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

// Set default timeout for scenarios
setDefaultTimeout(60000);

module.exports = {
    default: {
        require: [
            'F:/playwright-cucumber-js/acceptance/setup.js',
            'F:/playwright-cucumber-js/acceptance/stepDefinitions/*.js'
        ],
    },
};

Object.assign(global, {
    BASE_URL: 'https://www.newyorker.de/men/'
});

// Launch the browser
BeforeAll(async function () {
    global.browser = await chromium.launch({
        headless: true,
        slowMo: 100,
    });
});

// Close the browser after all tests
AfterAll(async function () {
    await global.browser.close();
});

// Create a new browser context and page per scenario
Before(async function () {
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
});

// Cleanup after each scenario
After(async function () {
    await global.page.close();
    await global.context.close();
});
