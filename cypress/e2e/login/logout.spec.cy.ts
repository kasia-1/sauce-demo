import {LoginPage} from "../../support/pageObjects/login/loginPage";
import {InventoryPage} from "../../support/pageObjects/purchases/inventoryPage";

describe('The user can successfully log out', () => {
    const loginPage: LoginPage = new LoginPage();
    const inventoryPage: InventoryPage = new InventoryPage();

    beforeEach(() => {
        loginPage.login();
        inventoryPage.isLoaded();
    })
    it('The user can log out when clicking the hamburger menu and logout link', () => {
        inventoryPage.hamburgerMenu.component.isVisible().click();
        inventoryPage.hamburgerMenu.logoutLink.isVisible().click();
        loginPage.form.loginFormIsVisible();
    });

});