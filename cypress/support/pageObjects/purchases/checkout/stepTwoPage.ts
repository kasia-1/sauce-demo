import { stepTwoPage } from "../../../selectors/purchases/checkout/stepTwoPage";
import {Page} from "../../common/page";

export class StepTwoPage extends Page {
    public title: string = 'Checkout: Overview'
    public url: string = '/checkout-step-two.html'

    get finishBtn() {
        return cy.getByTestId(stepTwoPage.finishBtn);
    }

    submit() {
        this.finishBtn.isVisible().click();
    }
}