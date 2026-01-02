import {InventoryItem, inventoryPage} from "../../selectors/purchases/inventoryPage";
import {InventoryPage} from "./inventoryPage";

export class InventoryItemPage extends InventoryPage {
    public title: string = 'Product detail view'

    isLoaded() {
        cy.getByTestId(inventoryPage.item).isVisible().should('have.length', '1');
        cy.getByTestId(inventoryPage.backToProductsLink).isVisible();
    }

    clickOnTheItemTitle(item: InventoryItem) {
        cy.getByTestId(`inventory-item-sauce-labs-${item}-img`).parent('a').invoke('attr', 'data-test')
            .then(val => {
                const id = val.match(/item-(\d+)-img-link/)[1]
                cy.wrap(id).as('itemId')
            });
        return cy.getByTestId(`inventory-item-sauce-labs-${item}-img`).isVisible().click();
    }

    urlContainsItemId() {
        return cy.get('@itemId').then((id) => {
            cy.url().should('include', `inventory-item.html?id=${id}`);
        });
    }
}