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

    before(() => {
        loginPage.login();
        inventoryPage.isLoaded();
    });

    it('The user can add item to the cart and finalize the purchase', () => {
        inventoryPage.addItem(InventoryItem.backpack);
        inventoryPage.cart.open();
        cartPage.isLoaded();
        cartPage.hasNumberOfItems(1);
        cartPage.goToCheckout();
        stepOnePage.isLoaded();
        stepOnePage.fillInTheForm();
        stepTwoPage.isLoaded();
        stepTwoPage.submit();
        completePage.isLoaded();
    })
});