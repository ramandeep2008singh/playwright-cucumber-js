const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.acceptCookieBtn = page.locator('.cookie-banner .cookie-banner-controls button');
        this.sideMenuBtn = page.locator('.hamburger-menu svg.light'); 
        this.selectproduct = page.locator('.item-group-1');
        this.categories = ['T-Shirts','Sweatshirts & Pullover','Hemden'];  // Categories selector
    }

    async acceptCookie() {
        if (await this.acceptCookieBtn.isVisible({ timeout: 5000 })) {
            await this.acceptCookieBtn.click();
        } else {
            console.log('Cookie banner not visible.');
        }
    }

    async visit(BASE_URL) {
        await this.page.goto(BASE_URL);  // Pass the base URL dynamically
        await this.page.waitForLoadState('networkidle');  // Wait for the page to fully load
    }

    async clickSideMenu() {
        await this.sideMenuBtn.waitFor({ state: 'visible', timeout: 10000 });
        await this.sideMenuBtn.click();
    }

    async selectProduct() {
        await this.selectproduct.click();
    }

    async selectCategories(categories) {
        for (const category of categories) {
            const categoryElement = this.categories(category);
            await categoryElement.waitFor({ state: 'visible', timeout: 10000 });
            await categoryElement.click();
        }
    }

   
}
