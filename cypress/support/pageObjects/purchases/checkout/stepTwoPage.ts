import { stepTwoPage } from "../../../selectors/purchases/checkout/stepTwoPage";
import {Page} from "../../common/page";

export class StepTwoPage extends Page {
    public title: string = 'Checkout: Overview'
    public url: string = '/checkout-step-two.html'

    get finishBtn() {
        return cy.getByTestId(stepTwoPage.finishBtn);
    }

    compareItemsPriceAndSubtotalPrice() {
        return cy.get(stepTwoPage.subtotalPrice)
            .isVisible()
            .invoke('text')
            .then((txt) => {
                const subtotalPrice = parseFloat(txt.match(/(\d*\.)?\d+/gm).toString());
                cy.task('getFromCache', 'priceSum').then((priceSum) => {
                   cy.wrap(priceSum).should('equal', subtotalPrice);
                });
            });
    }

    submit() {
        this.finishBtn.isVisible().click();
    }
}