import { LoginPage } from "../../support/pageObjects/login/loginPage";
import { CartPage } from "../../support/pageObjects/purchases/cartPage";
import {InventoryPage} from "../../support/pageObjects/purchases/inventoryPage";
import {InventoryItem} from "../../support/selectors/purchases/inventoryPage";

describe('Add a product to the cart', () => {
    const loginPage: LoginPage = new LoginPage();
    const inventoryPage: InventoryPage = new InventoryPage();
    const cartPage: CartPage = new CartPage();

    beforeEach(() => {
        loginPage.login();
        inventoryPage.isLoaded();
    });

    it('The user can add an item to the cart and it shows the item correctly', () => {
        inventoryPage.addItem(InventoryItem.backpack);
        inventoryPage.cart.showsValue(1);
        inventoryPage.cart.open();
        cartPage.isLoaded();
        cartPage.hasNumberOfItems(1);
        cartPage.cartList.eq(0).should('contain.text', 'Backpack');
        inventoryPage.getItemsSumPrice([InventoryItem.backpack]);
        cartPage.itemHasCorrectPrice(0);
    });
});