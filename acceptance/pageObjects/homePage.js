const expect = require('@playwright/test');

exports.HomePage = class HomePage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.acceptCookieBtn = page.locator(".cookie-banner .cookie-banner-controls button");
        this.selectCountryGoBtn = page.locator('.country-picker-container button');
        this.customerWidgetBtn = page.locator(".fashion-header .customer-widget");
        this.customerMenuLoginPanel = page.locator(".customer-menu.no-login.active");
        this.emailLoginWidgetTxt = page.locator(".customer-menu.no-login.active [type='email']");
        this.passwordLoginWidgetTxt = page.locator(".customer-menu.no-login.active [type='password']")
        this.loginBtn = page.locator(".button-login.disabled");
        this.loginWidgetXIconBtn = page.locator(".right-items .customer-widget")
    }

    async acceptCookie() {
        await this.acceptCookieBtn.click();
    }

    async clickGoButton() {
        await this.selectCountryGoBtn.click({force: true});
    }

    async visit() {
        await this.page.goto(BASE_URL);
    }

    async assertPageUrl() {
        await this.page.waitForURL(BASE_URL)
        await expect(this.page.url()).toEqual(BASE_URL);
    }

    async clickLoginIcon() {
        await this.customerWidgetBtn.click();
    }

    async assertLoginWidgetPanel() {
        await expect(this.customerMenuLoginPanel).toBeVisible();
    }
}