import { page } from '../../selectors/common/page';

export class HamburgerMenu {

    get component() {
        return cy.get(page.hamburgerMenu);
    }

    get logoutLink() {
        return cy.get(page.logoutLink);
    }

    isVisible() {
        this.component.isVisible();
    }
}