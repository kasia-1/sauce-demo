import { LoginPage } from "../../support/pageObjects/login/loginPage";
import { CartPage } from "../../support/pageObjects/purchases/cartPage";
import {InventoryPage} from "../../support/pageObjects/purchases/inventoryPage";
import {InventoryItem} from "../../support/selectors/purchases/inventoryPage";
import {StepOnePage} from "../../support/pageObjects/purchases/checkout/stepOnePage";
import {StepTwoPage} from "../../support/pageObjects/purchases/checkout/stepTwoPage";
import {CompletePage} from "../../support/pageObjects/purchases/checkout/completePage";

describe('The user can go through the full path of purchasing products', () => {
    const loginPage: LoginPage = new LoginPage();
    const inventoryPage: InventoryPage = new InventoryPage();
    const cartPage: CartPage = new CartPage();
    const stepOnePage: StepOnePage = new StepOnePage();
    const stepTwoPage: StepTwoPage = new StepTwoPage();
    const completePage: CompletePage = new CompletePage();

    beforeEach(() => {
        loginPage.login();
        inventoryPage.isLoaded();
    });

    it('The user can add item to the cart and finalize the purchase', () => {
        inventoryPage.addItem(InventoryItem.backpack);
        inventoryPage.getItemsSumPrice([InventoryItem.backpack]);
        inventoryPage.cart.showsValue(1);
        inventoryPage.cart.open();
        cartPage.isLoaded();
        cartPage.hasNumberOfItems(1);
        cartPage.goToCheckout();
        stepOnePage.isLoaded();
        stepOnePage.fillInTheForm();
        stepTwoPage.isLoaded();
        stepTwoPage.compareItemsPriceAndSubtotalPrice();
        stepTwoPage.submit();
        completePage.isLoaded();
        completePage.cart.isEmpty();
    });
    it('The user can add 3 items to the cart and finalize the purchase', () => {
        inventoryPage.addItem(InventoryItem.backpack);
        inventoryPage.addItem(InventoryItem.jacket);
        inventoryPage.addItem(InventoryItem.onesie);
        inventoryPage.getItemsSumPrice([InventoryItem.backpack, InventoryItem.jacket, InventoryItem.onesie]);
        inventoryPage.cart.showsValue(3);
        inventoryPage.cart.open();
        cartPage.isLoaded();
        cartPage.hasNumberOfItems(3);
        cartPage.goToCheckout();
        stepOnePage.isLoaded();
        stepOnePage.fillInTheForm();
        stepTwoPage.isLoaded();
        stepTwoPage.compareItemsPriceAndSubtotalPrice();
        stepTwoPage.submit();
        completePage.isLoaded();
        completePage.cart.isEmpty();
    });
});