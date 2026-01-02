import { loginPage } from '../../selectors/login/loginPage'

export class LoginForm {
    public username: string = 'standard_user';
    public password: string = 'secret_sauce';
    public incorrectPassword: string = 'incorrect_password';
    public incorrectUsername: string = 'incorrect_user';

    get usernameInput() {
        return cy.getByTestId(loginPage.usernameInput);
    }

    get passwordInput() {
        return cy.getByTestId(loginPage.passwordInput);
    }

    get loginButton() {
        return cy.getByTestId(loginPage.loginButton);
    }

    loginFormIsVisible() {
        this.usernameInput.isVisible();
        this.passwordInput.isVisible();
        this.loginButton.isVisible();
    }

    submit() {
        this.loginButton.click();
    }

    enterUsername(username: string) {
        this.usernameInput.type(username).should('have.value', username);
    }

    enterPassword(password:string) {
        this.passwordInput.type(password).should('have.value', password);
    }
}