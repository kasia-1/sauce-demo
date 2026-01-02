import { cartPage } from "../../selectors/purchases/cartPage";
import { Page } from "../common/page";
import {InventoryItem} from "../../selectors/purchases/inventoryPage";

export class CartPage extends Page {
    public title: string = 'Your Cart'
    public url: string = '/cart.html'

    get checkoutBtn() {
        return cy.getByTestId(cartPage.checkoutBtn);
    }

    get cartList() {
        return cy.get(cartPage.cartList);
    }

    hasNumberOfItems(numberOfItems: number) {
        return this.cartList.isVisible().should('have.length', numberOfItems);
    }

    goToCheckout() {
        this.checkoutBtn.scrollIntoView().isVisible().click();
    }

    itemHasCorrectPrice(itemIndex: number) {
        cy.task('getFromCache', 'priceSum').then((priceSum) => {
        return this.cartList
            .eq(itemIndex)
            .isVisible()
            .should('contain.text', priceSum)
            .invoke('text')
            });
    }

    removeItem(item: InventoryItem) {
        cy.getByTestId(`remove-sauce-labs-${item}`).scrollIntoView().isVisible().click();
        cy.getByTestId(`remove-sauce-labs-${item}`).should('not.exist');
    }
}