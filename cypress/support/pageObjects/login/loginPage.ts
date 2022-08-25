import { loginPage } from "../../selectors/login/loginPage";
import { LoginForm } from "./loginForm";

export class LoginPage {
    public form: LoginForm = new LoginForm();

    visit() {
        cy.visit('/');
        cy.url().should('equal', 'https://www.saucedemo.com/');
        cy.get(loginPage.loginForm).isVisible();
    }

    get errorPopup() {
        return cy.getByTestId(loginPage.errorPopup)
    }

    login() {
        this.visit()
        this.form.enterUsername(this.form.username);
        this.form.enterPassword(this.form.password);
        this.form.submit();
    }
}