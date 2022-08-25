import { completePage } from "../../../selectors/purchases/checkout/completePage";
import {Page} from "../../common/page";

export class CompletePage extends Page {
    public title: string = 'Checkout: Complete!'
    public url: string = '/checkout-complete.html'

    get noteHeader() {
        return cy.get(completePage.header);
    }

    get note() {
        return cy.get(completePage.note);
    }

    get image() {
        return cy.get(completePage.ponyImage)
    }

    get backBtn() {
        return cy.getByTestId(completePage.backBtn);
    }

    isLoaded() {
        super.isLoaded();
        this.image.isVisible();
        this.noteHeader.isVisible().hasText('THANK YOU FOR YOUR ORDER');
        this.note.isVisible().hasText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        this.backBtn.scrollIntoView().isVisible();
    }
}
