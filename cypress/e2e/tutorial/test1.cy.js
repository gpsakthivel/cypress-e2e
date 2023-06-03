/// <reference types="cypress" />

it('Google Search', () => {
    cy.visit('https://google.com')

    cy.get('#APjFqb').type('cypress{Enter}')

    // cy.contains('Google Search').click()

    cy.wait(2000)
    
    cy.contains('Videos').click()
})