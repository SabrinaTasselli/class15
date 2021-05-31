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
    
    it("adding one product to the cart clicking at the image", () => {
        LoginPage.addToCartButton4.click();
        expect(LoginPage.shoppingCart).toHaveText("1");
        expect(LoginPage.shoppingCart).toHaveClass("shopping_cart_badge");
        expect(LoginPage.removeButton4).toExist();
    });

    it("removing one product to the cart", () => {
        LoginPage.removeButton4.click();
        expect(LoginPage.shoppingCartContainer).not.toHaveClass("shopping_cart_badge");
    });

    it("opening the filter product", () => {
        LoginPage.productSortContainer.click();
        expect(LoginPage.productSortContainer).toHaveTextContaining("Name (A to Z)", "Name (Z to A)", "Price (low to high)", "Price (high to low)");
    });

    it("sorting from A to Z", () => {
        LoginPage.sortOption1.click();
        expect(LoginPage.inventoryItem).toHaveTextContaining("Sauce Labs Backpack", "Sauce Labs Bike Light", "Sauce Labs Bolt T-Shirt", "Sauce Labs Fleece Jacket", "Sauce Labs Onesie", "Test.allTheThings() T-Shirt (Red)");
    });

    it("sorting from Z to A", () => {
        LoginPage.sortOption2.click();
        expect(LoginPage.inventoryItem).toHaveTextContaining("Test.allTheThings() T-Shirt (Red)", "Sauce Labs Onesie", "Sauce Labs Fleece Jacket", "Sauce Labs Bolt T-Shirt", "Sauce Labs Bike Light", "Sauce Labs Backpack");
    });

    it("sorting by price from low to high", () => {
        LoginPage.sortOption3.click();
        expect(LoginPage.inventoryItem).toHaveTextContaining("Sauce Labs Onesie", "Sauce Labs Bike Light", "Sauce Labs Bolt T-Shirt", "Test.allTheThings() T-Shirt (Red)", "Sauce Labs Backpack", "Sauce Labs Fleece Jacket");
    });

    it("sorting by price from high to low", () => {
        LoginPage.sortOption4.click();
        expect(LoginPage.inventoryItem).toHaveTextContaining("Sauce Labs Fleece Jacket", "Sauce Labs Backpack", "Test.allTheThings() T-Shirt (Red)", "Sauce Labs Bolt T-Shirt", "Sauce Labs Bike Light", "Sauce Labs Onesie");
    });


 
});    