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
    it("adding a product and going to the cart", () => {
        LoginPage.addToCartButton4.click();
        LoginPage.shoppingCartLink.click();
        expect(LoginPage.cartItem).toExist();
    });

    it("removing a product from the cart", () => {
        LoginPage.removeButton4.click();
        expect(LoginPage.cartItem).not.toExist();
        expect(LoginPage.removeCartItem).toExist();
    });

    it("adding all items products to the cart", () => {
        LoginPage.continueShoppingButton.click();
        LoginPage.product0.click();
        LoginPage.addToCartButton0.click();
        LoginPage.backToProductsButton.click();
        LoginPage.product1.click();
        LoginPage.addToCartButton1.click();
        LoginPage.backToProductsButton.click();
        LoginPage.product2.click();
        LoginPage.addToCartButton2.click();
        LoginPage.backToProductsButton.click();
        LoginPage.product3.click();
        LoginPage.addToCartButton3.click();
        LoginPage.backToProductsButton.click();
        LoginPage.product4.click();
        LoginPage.addToCartButton4.click();
        LoginPage.backToProductsButton.click();
        LoginPage.product5.click();
        LoginPage.addToCartButton5.click();
        LoginPage.backToProductsButton.click();
        expect(LoginPage.shoppingCart).toHaveText("6");
        expect(LoginPage.shoppingCart).toHaveClass("shopping_cart_badge");
    });

    it("going to the cart and press checkout", () => {
        LoginPage.shoppingCartLink.click();
        expect(LoginPage.cartItem).toBeElementsArrayOfSize(6);
        expect(LoginPage.inventoryItmDesc).toBeElementsArrayOfSize(6);
        expect(LoginPage.inventoryItemPrice).toBeElementsArrayOfSize(6);
        LoginPage.checkoutButton.click();
    });

    it("leaving the checkput info empty", () => {
        LoginPage.continueButton.click();
        expect(LoginPage.errorMessage).toHaveText("Error: First Name is required");
        LoginPage.errorButton.click();
    });

    it("only firts name", () => {
        LoginPage.firstName.addValue("Sabrina");
        LoginPage.continueButton.click();
        expect(LoginPage.errorMessage).toHaveText("Error: Last Name is required");
        LoginPage.errorButton.click();
    });

    it("only firts name and last name", () => {
        LoginPage.lastName.addValue("Tasselli")
        LoginPage.continueButton.click();
        expect(LoginPage.errorMessage).toHaveText("Error: Postal Code is required");
        LoginPage.errorButton.click();
    });

    it("introducing all data required", () => {
        LoginPage.postalCode.addValue("2000");
        LoginPage.continueButton.click();
        expect(LoginPage.cartItem).toBeElementsArrayOfSize(6);
        expect(LoginPage.inventoryItmDesc).toBeElementsArrayOfSize(6);
        expect(LoginPage.inventoryItemPrice).toBeElementsArrayOfSize(6);
        expect(LoginPage.summaryInfo).toHaveTextContaining("Payment Information:", "SauceCard #31337", "Shipping Information:", "FREE PONY EXPRESS DELIVERY!", "Item total: $129.94", "Tax: $10.40", "Total: $140.34", "FINISH");
    });  

    it("finishing operation", () => {
        LoginPage.finishButton.click();
        expect(LoginPage.completeOperationHeader).toHaveText("THANK YOU FOR YOUR ORDER");
        expect(LoginPage.completeOperationText).toHaveText("Your order has been dispatched, and will arrive just as fast as the pony can get there!");
    });

    it("Back home button", () => {
        LoginPage.backHomeButton.click();
        expect(LoginPage.shoppingCartContainer).not.toHaveClass("shopping_cart_badge");
    });
});    