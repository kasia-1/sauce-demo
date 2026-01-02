import { LoginPage } from "../../support/pageObjects/login/loginPage";
import { CartPage } from "../../support/pageObjects/purchases/cartPage";
import {InventoryPage} from "../../support/pageObjects/purchases/inventoryPage";
import {InventoryItem} from "../../support/selectors/purchases/inventoryPage";

describe('Cart mutations', () => {
    const loginPage: LoginPage = new LoginPage();
    const inventoryPage: InventoryPage = new InventoryPage();
    const cartPage: CartPage = new CartPage();

    beforeEach(() => {
        loginPage.login();
        inventoryPage.isLoaded();
    });

    it('The cart is empty when removing the item', () => {
        inventoryPage.addItem(InventoryItem.backpack);
        inventoryPage.cart.showsValue(1);
        inventoryPage.removeItem(InventoryItem.backpack);
        inventoryPage.cart.isEmpty();
    });
    it('The user can remove an item in the cart and it updates correctly', () => {
        inventoryPage.addItem(InventoryItem.backpack);
        inventoryPage.addItem(InventoryItem.jacket);
        inventoryPage.addItem(InventoryItem.onesie);
        inventoryPage.cart.open();
        cartPage.isLoaded();
        cartPage.hasNumberOfItems(3);
        cartPage.removeItem(InventoryItem.backpack);
        cartPage.hasNumberOfItems(2);
    });
});