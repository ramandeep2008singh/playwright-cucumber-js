const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

setDefaultTimeout(60000); // Set default timeout for scenarios

let browser;

Before(async function () {
    browser = await chromium.launch({ headless: false }); // Launch the browser
    const context = await browser.newContext(); // Create a new browser context
    this.page = await context.newPage(); // Assign the new page to this.page
});

After(async function () {
    await this.page.close(); // Close the page after each scenario
    await browser.close(); // Close the browser after all scenarios
});
