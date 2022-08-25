// @ts-nocheck
import {getByTestId, getByTestIdLike} from './selectors'
import { hasValidationError, isVisible, hasText } from './assertions'

/* Selectors commands */
Cypress.Commands.add('getByTestId', getByTestId);
Cypress.Commands.add('getByAttrLike', getByTestIdLike);

/* Assertions commands */
Cypress.Commands.add('isVisible', { prevSubject: true }, isVisible);
Cypress.Commands.add(
    'hasValidationError',
    { prevSubject: true },
    hasValidationError
);
Cypress.Commands.add('hasText', { prevSubject: true }, hasText);