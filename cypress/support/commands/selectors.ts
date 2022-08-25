/// <reference types="cypress" />
import Chainable = Cypress.Chainable

export function getByTestId(
    selector: any,
    ...args: any[]
): Chainable<JQuery<HTMLElement>> {
    return cy.get(`[data-test=${selector}]`, ...args);
}

export function getByTestIdLike(
    selector: any,
    ...args: any[]
): Chainable<JQuery<HTMLElement>> {
    return cy.get(`[data-test*=${selector}]`, ...args)
}