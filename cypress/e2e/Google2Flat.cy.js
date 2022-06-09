describe('Flat by Google', () => {

  it('should find flat on Google and go to that parameters', () => {
    cy.visit('http://www.google.com')
    cy.get('#L2AGLb > .QS5gu').click();
    cy.get('input[name="q"]').type('57 West 58 Street, #8E site:localize.city{enter}')
    cy.get('[href="https://www.localize.city/nyc/listings/l-akp84fc14dig"] > .LC20lb')
    .invoke('attr','href')
    .contains('57 West 58 Street, New York, NY, 10019 Home Details')
    .click()
    cy.contains('57 West 58 Street, #8E')
  });
});
