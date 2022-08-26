import { page } from '../../selectors/common/page';
import {Cart} from "./cart";
import {HamburgerMenu} from "./hamburgerMenu";

export interface IPage {
    title: string;
    url: string;
    cart: Cart;
    hamburgerMenu: HamburgerMenu;
}

export abstract class Page implements IPage {
    public title: string;
    public url: string;
    public cart: Cart = new Cart();
    public hamburgerMenu: HamburgerMenu = new HamburgerMenu();

    get header() {
        return cy.get(page.header);
    }

    isLoaded() {
        this.header.isVisible().should('have.text', this.title);
        cy.url().should('contain', this.url);
    }
}