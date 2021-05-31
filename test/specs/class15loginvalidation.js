const LoginPage = require('../page.object/login.page');


describe("Validation of Login page", () => {
    beforeAll("open browser", () => {
        return browser.url("https://www.saucedemo.com/");
    });
    it("find username in DOM", () => {
        expect(LoginPage.userName).toExist();
    });

    it("find password in DOM", () => {
        expect(LoginPage.password).toExist();
    });

    it("username is empty with incorrect password", () => {
        LoginPage.password.addValue("1234");
        LoginPage.loginButton.click();
        expect(LoginPage.datavalidation).toHaveText("Epic sadface: Username is required");
    });

    it("username is empty with correct password", () => {
        LoginPage.password.clearValue();
        LoginPage.password.addValue("secret_sauce");
        LoginPage.loginButton.click();
        expect(LoginPage.datavalidation).toHaveText("Epic sadface: Username is required");
    });

    it("password is empty with an invalid username", () => {
        browser.refresh();
        LoginPage.userName.addValue("sabrina");
        LoginPage.loginButton.click();
        expect(LoginPage.datavalidation).toHaveText("Epic sadface: Password is required");
    });

    it("password is empty with a valid username", () => {
        LoginPage.userName.clearValue();
        LoginPage.userName.addValue("standard_user");
        LoginPage.loginButton.click();
        expect(LoginPage.datavalidation).toHaveText("Epic sadface: Password is required");
    });

    it("invalid username and incorrect password", () => {
        browser.refresh();
        LoginPage.userName.addValue("sabrina")
        LoginPage.password.addValue("1234");
        LoginPage.loginButton.click();
        expect(LoginPage.datavalidation).toHaveText("Epic sadface: Username and password do not match any user in this service");
    });

    it("valid username and incorrect password", () => {
        LoginPage.userName.clearValue();
        LoginPage.userName.addValue("standard_user");
        LoginPage.loginButton.click();
        expect(LoginPage.datavalidation).toHaveText("Epic sadface: Username and password do not match any user in this service");
    });

    it("invalid username and correct password", () => {
        LoginPage.userName.clearValue();
        LoginPage.password.clearValue();
        LoginPage.userName.addValue("sabrina");
        LoginPage.password.addValue("secret_sauce");
        LoginPage.loginButton.click();
        expect(LoginPage.datavalidation).toHaveText("Epic sadface: Username and password do not match any user in this service");
    });

    it("introduce an accepted username and correct password", () => {
        LoginPage.userName.clearValue();
        LoginPage.password.clearValue();
        LoginPage.userName.addValue("standard_user");
        LoginPage.password.addValue("secret_sauce");
        LoginPage.loginButton.click();
        expect(browser.url("https://www.saucedemo.com/inventory.html"));
    });  
});




