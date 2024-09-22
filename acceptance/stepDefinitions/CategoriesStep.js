const { Given, When, Then } = require('@cucumber/cucumber');
const homePage = require('../pageObjects/CategoriesStep');

Given('I land on the homepage', async function() {
    await homePage.visit(BASE_URL);  // Navigate to homepage
    await homePage.acceptCookie();  // Accept cookies if needed
});

When('I open the side menu', async function() {
    await homePage.clickSideMenu();  // Open the side menu
});

When('I Select product from the side menu', async function() {
    await homePage.selectProduct();  // Open the side menu
});


When('I select three different categories', async function() {
    await homePage.selectCategories(['T-Shirts','Sweatshirts & Pullover','Hemden']);  // Adjust category names as needed
});
