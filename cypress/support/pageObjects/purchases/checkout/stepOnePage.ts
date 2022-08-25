import { stepOnePage } from "../../../selectors/purchases/checkout/stepOnePage";
import {Page} from "../../common/page";

const formData = {
    name: 'Test',
    lastName: 'Tester',
    zipCode: '11-111'
};

export class StepOnePage extends Page {
    public title: string = 'Checkout: Your Information'
    public url: string = '/checkout-step-one.html'

    get nameInput() {
        return cy.getByTestId(stepOnePage.nameInput);
    }

    get lastNameInput() {
        return cy.getByTestId(stepOnePage.lastNameInput);
    }

    get zipCodeInput() {
        return cy.getByTestId(stepOnePage.zipCode);
    }

    get continueBtn() {
        return cy.getByTestId(stepOnePage.continueBtn);
    }

    submit() {
        this.continueBtn.isVisible().click();
    }

    fillInTheForm() {
        this.nameInput.isVisible().type(formData.name);
        this.lastNameInput.isVisible().type(formData.lastName);
        this.zipCodeInput.isVisible().type(formData.zipCode);
        this.submit();
    }
}