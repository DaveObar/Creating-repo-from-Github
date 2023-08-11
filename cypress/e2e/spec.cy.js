describe('Testing Wayfair address modal', () => {
  it('passes', () => {
    cy.visit('https://qa-7.d.bark.com/en/us/')
    cy.get('.navitem-regpro > .btn').click()
    cy.get(':nth-child(1) > [data-cy="seller-signup-splash-popular-service"] > .d-flex > .text-truncate').click() 
    cy.get('[data-cy="seller-signup-form-location"]').type("12")
    cy.get('[data-cy="autocomplete-result-0"]').click()
    cy.get('[data-cy="seller-signup-form-location-next"]').click()
    //cy.get('.section-2 > .card').scrollTo(0,500) 
  
  
  
  
  
  
  
  
  })
})