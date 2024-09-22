const { Given, When, Then } = require('@cucumber/cucumber');
const { HomePage } = require('../pageObjects/homePage');

Given('I am on the home screen', async function () {
    const homePage = new HomePage(page);
    await homePage.visit();
});

Then('I should be able to see the correct URL', async function () {
    const homePage = new HomePage(page);
    await homePage.assertPageUrl();
});

When('I click on the login icon', async function () {
    const homePage = new HomePage(page);
    await homePage.acceptCookie();
    await homePage.clickGoButton();
    await homePage.clickLoginIcon();
});

Then('I should see a panel opened with input fields with email address, password, register and login buttons', async function () {
    const homePage = new HomePage(page);
    await homePage.assertLoginWidgetPanel();
});