const { Given, When } = require('@cucumber/cucumber');
const { CategoriesPage } = require('../pageObjects/CategoriesPage');

Given('I land on the homepage', async function() {
    const categoriesPage = new CategoriesPage(page);
    await categoriesPage.visit();  // Navigate to homepage
    await categoriesPage.acceptCookie();  // Accept cookies if needed
});

When('I open the side menu', async function() {
    const categoriesPage = new CategoriesPage(page);
    await categoriesPage.clickSideMenu();  // Open the side menu
});

When('I select three different categories', async function() {
    const categoriesPage = new CategoriesPage(page);
    await categoriesPage.selectCategories(['T-Shirts','Sweatshirts & Pullover','Hemden']);  // Adjust category names as needed
});

When('I Select product from the side menu', async function() {
    const categoriesPage = new CategoriesPage(page);
    await categoriesPage.selectProduct();  // Open the side menu
});
