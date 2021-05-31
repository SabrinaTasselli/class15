const { summaryTaxLabel, summaryTotalLabel } = require('../page.object/login.page');
const LoginPage = require('../page.object/login.page');


describe("shopping cart", () => {
    beforeAll("open browser", () => {
        return browser.url("https://www.saucedemo.com/");
    });
    it("loging to the page", () => {
        LoginPage.userName.addValue("standard_user");
        LoginPage.password.addValue("secret_sauce");
        LoginPage.loginButton.click();
        expect(browser.url("https://www.saucedemo.com/inventory.html"));
    });

    it("clicking in the burger menu", () => {
        LoginPage.burgerMenu.click();
        expect(LoginPage.menu).toExist();
    });

    it("clicking in inventory", () => {
        LoginPage.inventorySidebarLink.click();
        expect(browser.url("https://www.saucedemo.com/inventory.html"));
    });

    it("clicking in about", () => {
        LoginPage.burgerMenu.click();
        LoginPage.aboutSidebarLink.click();
        expect(browser.url("https://saucelabs.com/"));
        browser.url("https://www.saucedemo.com");
        LoginPage.userName.addValue("standard_user");
        LoginPage.password.addValue("secret_sauce");
        LoginPage.loginButton.click();
    });

    it("clicking in reset app state", () => {
        LoginPage.addToCartButton0.click();
        LoginPage.burgerMenu.click();
        LoginPage.resetSidebarLink.click();
        expect(LoginPage.shoppingCartContainer).not.toHaveClass("shopping_cart_badge");
    });

    it("clicking in logout", () => {
        LoginPage.logoutSidebarLink.click();
        expect(browser).toHaveUrl("https://www.saucedemo.com/");
    });
});