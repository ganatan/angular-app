describe('angular-select-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.login('my-email@something.com', 'myPassword');
  });
});
