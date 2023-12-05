import { getGreeting } from '../support/app.po';

describe('angular-modal-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.login('my-email@something.com', 'myPassword');
  });
});
