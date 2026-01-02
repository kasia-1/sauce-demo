import { LoginPage } from "../../support/pageObjects/login/loginPage";
import {InventoryPage} from "../../support/pageObjects/purchases/inventoryPage";
import {InventoryItem} from "../../support/selectors/purchases/inventoryPage";
import {InventoryItemPage} from "../../support/pageObjects/purchases/inventoryItemPage";

describe('Product details', () => {
    const loginPage: LoginPage = new LoginPage();
    const inventoryPage: InventoryPage = new InventoryPage();
    const inventoryItemPage: InventoryItemPage = new InventoryItemPage();

    beforeEach(() => {
        loginPage.login();
        inventoryPage.isLoaded();
    });

    it('The user can open the product details by clicking on it on the list', () => {
        inventoryPage.clickOnTheItemTitle(InventoryItem.backpack);
        inventoryItemPage.isLoaded();
        inventoryItemPage.urlContainsItemId();
    });
});