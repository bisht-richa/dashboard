describe('Login page a11y testing', { tags: ['@adminUser', '@standardUser'] }, () => {
  it('wcag21aa test', (wait = 600) => {
    cy.visit(`${ Cypress.config().baseUrl }`);
    cy.injectAxe();
    cy.wait(wait);
    cy.checkPageAccessibility();
  });
});
