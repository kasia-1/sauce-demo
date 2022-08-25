/// <reference types="cypress" />

// declare global {

declare namespace Cypress {
        interface Chainable {
            /**
             * <p>Custom command to select DOM element by data-test attribute.</p>
             * <p>@example const username = cy.getByTestAttr('username').get('input');</p>
             */
            getByTestId(
                dataTestAttribute: string,
                args?: any
            ): Chainable<JQuery<HTMLElement>>;
            /**
             * Custom command to select DOM element by partial data-test test attribute.
             * @example const searchbar = cy.getByPartial('item');
             */
            getByTestIdLike: (
                dataTestAttribute: string,
                args?: any
            ) => typeof import('./commands/selectors').getByTestIdLike;
            /**
             *
             *<p>Chainable custom command for checking</p>
             *<p>element visibility</p>
             *<p>It will check if element exist</p>
             *<p> and if it is visible using chai assertions</p>
             * @example
             *  cy.getByTestAttr('username').isVisible().click();
             * */
            isVisible: () => Cypress.Chainable<JQuery<HTMLElement>>;
            /**
             *
             *<p>Chainable custom command for checking </p>
             *<p>if element is marked with validation error</p>
             * @example
             *  cy.getByTestAttr('username').hasValidationError();
             * */
            hasValidationError: () => typeof import('./commands/assertions').hasValidationError
            /**
             *
             *<p>Chainable custom command for checking </p>
             *<p>if element is marked with validation error</p>
             * @example
             *  cy.getByTestAttr('username').isVisible().hasErrorMessage('The username is not valid');
             * */
            hasText: (text: string) => typeof import('./commands/assertions').hasText
        }
    }
// }