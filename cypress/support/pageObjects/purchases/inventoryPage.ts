import {InventoryItem, inventoryPage} from "../../selectors/purchases/inventoryPage";
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

    isLoaded() {
        super.isLoaded();
        this.hamburgerMenu.isVisible();
    }

    getItemsSumPrice(items: InventoryItem[]) {
        let priceSum: number = 0;
        return (items).forEach((el) => {
            return cy.getByTestId(`remove-sauce-labs-${el}`)
                .siblings(inventoryPage.itemPrice)
                .isVisible()
                .invoke('text')
                .then((txt) => {
                    const itemPrice = parseFloat(txt.match(/(\d*\.)?\d+/gm).toString());
                    priceSum += itemPrice;
                    cy.task('putInCache', {
                        key: 'priceSum',
                        data: priceSum,
                    });
                });
        });
    }
}