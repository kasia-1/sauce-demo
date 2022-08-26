import {page} from "../../selectors/common/page";

export class Cart {
    get cartIcon() {
        return cy.get(page.cartIcon);
    }
    get itemCounter() {
        return cy.get(page.cartItemCounter);
    }

    open() {
        this.cartIcon.isVisible().click();
    }

    showsValue(itemCount: number) {
        this.itemCounter.isVisible().should('have.text', itemCount);
    }

    isEmpty() {
        cy.get(page.cartItemCounter).should('not.exist');
    }
}