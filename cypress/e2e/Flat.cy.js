describe('Flat', () => {

  it('should click on specific flat from list', () => {
    cy.visit('https://www.localize.city/nyc/for-sale/midtown-neighborhood-manhattan-new-york-ny')
    cy.wait(10000)
  //  cy.contains('Beds').click({force: true})
  cy.get('[data-id=l-akp84fc14dig')
  //.should('have.attr', 'href').and('include','/nyc/listings/l-akp84fc14dig')
  .click()
  cy.wait(10000)
  cy.contains('57 West 58 Street, #8E')
  });
});
