import { page } from '../../selectors/common/page';

export class HamburgerMenu {

    get hamburgerMenu() {
        return cy.get(page.hamburgerMenu);
    }

    isVisible() {
        this.hamburgerMenu.isVisible();
    }
}