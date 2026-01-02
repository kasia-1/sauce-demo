import {LoginPage} from "../../support/pageObjects/login/loginPage";
import {InventoryPage} from "../../support/pageObjects/purchases/inventoryPage";

describe('The user can successfully log in only with valid credentials', () => {
  const loginPage: LoginPage = new LoginPage();
  const inventoryPage: InventoryPage = new InventoryPage();

  beforeEach(() => {
    loginPage.visit();
  })

  it('The user can log in with correct credentials', () => {
    loginPage.form.enterUsername(loginPage.form.username);
    loginPage.form.enterPassword(loginPage.form.password);
    loginPage.form.submit();
    inventoryPage.isLoaded();
  });
  it('The user is still logged in after refreshing the page', () => {
    loginPage.form.enterUsername(loginPage.form.username);
    loginPage.form.enterPassword(loginPage.form.password);
    loginPage.form.submit();
    inventoryPage.isLoaded();
    cy.reload();
    inventoryPage.isLoaded();
  });
  it('The user can\'t log in without username and password', () => {
    loginPage.form.submit();
    loginPage.errorPopup.isVisible();
  });
  it('The user can\'t log in without password', () => {
    loginPage.form.enterUsername(loginPage.form.username);
    loginPage.form.submit();
    loginPage.errorPopup.isVisible().hasText('Password is required');
    loginPage.form.passwordInput.hasValidationError();
  });
  it('The user can\'t log in without username', () => {
    loginPage.form.enterPassword(loginPage.form.password);
    loginPage.form.submit();
    loginPage.errorPopup.isVisible().hasText('Username is required');
    loginPage.form.passwordInput.hasValidationError();
  });
  it('The user can\'t log in with incorrect password', () => {
    loginPage.form.enterUsername(loginPage.form.username);
    loginPage.form.enterPassword(loginPage.form.incorrectPassword);
    loginPage.form.submit();
    loginPage.errorPopup.isVisible().hasText('Username and password do not match any user in this service');
    loginPage.form.passwordInput.hasValidationError();
  });
  it('The user can\'t log in with incorrect username', () => {
    loginPage.form.enterUsername(loginPage.form.incorrectUsername);
    loginPage.form.enterPassword(loginPage.form.password);
    loginPage.form.submit();
    loginPage.errorPopup.isVisible().hasText('Username and password do not match any user in this service');
    loginPage.form.passwordInput.hasValidationError();
  });
});