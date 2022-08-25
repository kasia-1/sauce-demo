import { InventoryItem } from "../../selectors/purchases/inventoryPage";
import {Page} from "../common/page";

export class InventoryPage extends Page {
    public title: string = 'Products'
    public url: string = '/inventory.html'


    addItem(item: InventoryItem) {
        cy.getByTestId(`add-to-cart-sauce-labs-${item}`).scrollIntoView().isVisible().click();
        cy.getByTestId(`remove-sauce-labs-${item}`).scrollIntoView().isVisible();
    }

    removeItem(item: InventoryItem) {
        cy.getByTestId(`remove-sauce-labs-${item}`).scrollIntoView().isVisible().click();
        cy.getByTestId(`add-to-cart-sauce-labs-${item}`).scrollIntoView().isVisible();
    }

    removeAllItems() {
        cy.getByPartial('remove-sauce-labs').isVisible().click({ multiple: true });
    }

    isLoaded() {
        super.isLoaded();
        this.hamburgerMenu.isVisible();
    }
}