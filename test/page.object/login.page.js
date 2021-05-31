const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get userName () { return $('#user-name') }
    get password () { return $("#password") }
    get loginButton () { return $("#login-button") }
    get datavalidation () { return $(".error-message-container").$("h3") }
    get product0 () { return $("#item_0_img_link") }
    get product1 () { return $("#item_1_img_link") }
    get product2 () { return $("#item_2_img_link") }
    get product3 () { return $("#item_3_img_link") } 
    get product4 () { return $("#item_4_img_link") }
    get product5 () { return $("#item_5_img_link") }
    get backToProductsButton () { return $("#back-to-products") }
    get shoppingCartLink () { return $(".shopping_cart_link") }
    get addToCartButton0 () { return $("#add-to-cart-sauce-labs-bike-light") }
    get addToCartButton1 () { return $("#add-to-cart-sauce-labs-bolt-t-shirt") }
    get addToCartButton2 () { return $("#add-to-cart-sauce-labs-onesie") }
    get addToCartButton3 () { return $("button*=cart") }
    //tuve que poner el selector asi porque el id del producto 3 no funciona
    get addToCartButton4 () { return $("#add-to-cart-sauce-labs-backpack") }
    get addToCartButton5 () { return $("#add-to-cart-sauce-labs-fleece-jacket") }
    get shoppingCartContainer () { return $("#shopping_cart_container") }
    get shoppingCart () { return $(".shopping_cart_badge") }
    get cartItem () { return $$(".cart_item") }
    get removeButton0 () { return $("#remove-sauce-labs-bike-light") }
    get removeButton1 () { return $("#remove-sauce-labs-bolt-t-shirt") }
    get removeButton2 () { return $("#remove-sauce-labs-onesie") }
    get removeButton3 () { return $("#remove-test.allthethings()-t-shirt-(red)") }
    get removeButton4 () { return $("#remove-sauce-labs-backpack") }
    get removeButton5 () { return $("#remove-sauce-labs-fleece-jacket") }
    get removeCartItem () { return $(".removed_cart_item") }
    get continueShoppingButton () { return $("#continue-shopping") }
    get inventoryItem () { return $(".inventory_item") }
    get inventoryItmDesc () { return $$(".inventory_item_desc") }
    get inventoryItemPrice () { return $$(".inventory_item_price") }
    get checkoutButton () { return $("#checkout") }
    get firstName () { return $("#first-name") }
    get lastName () { return $("#last-name") }
    get postalCode () { return $("#postal-code") }
    get continueButton () { return $("#continue") }
    get errorMessage () { return $("h3") }
    get errorButton () { return $(".error-button") }
    get summaryInfo () { return $(".summary_info") }
    get finishButton () { return $("#finish") }
    get completeOperationHeader () { return $(".complete-header") }
    get completeOperationText () { return $(".complete-text") }
    get backHomeButton () { return $("#back-to-products") }
    get productSortContainer () { return $(".product_sort_container") }
    get sortOption1 () { return $("#header_container > div.header_secondary_container > div.right_component > span > select > option:nth-child(1)") }
    get sortOption2 () { return $("#header_container > div.header_secondary_container > div.right_component > span > select > option:nth-child(2)") }
    get sortOption3 () { return $("#header_container > div.header_secondary_container > div.right_component > span > select > option:nth-child(3)") }
    get sortOption4 () { return $("#header_container > div.header_secondary_container > div.right_component > span > select > option:nth-child(4)") }
    get burgerMenu () { return $("#react-burger-menu-btn") }
    get menu () { return $(".bm-menu") }
    get inventorySidebarLink () { return $("#inventory_sidebar_link") }
    get aboutSidebarLink () { return $("#about_sidebar_link") }
    get resetSidebarLink () { return $("#reset_sidebar_link") }
    get logoutSidebarLink () { return $("#logout_sidebar_link") }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
/*     async login (username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
    
    open () {
        return super.open('login');
    }**/
}

module.exports = new LoginPage();
