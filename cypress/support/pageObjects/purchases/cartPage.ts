import { cartPage } from "../../selectors/purchases/cartPage";
import { Page } from "../common/page";

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
}