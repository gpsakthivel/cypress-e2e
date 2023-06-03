/// <reference types="cypress" />

describe('timesheet automation', () => {

    it('login to timeentry site', () => {

        cy.visit('https://timeentrysystem.ad.local/')

        cy.get('#username').type('abc{Enter}')
        cy.get('#password').type('xyz')
        cy.get('#loginclick').click()
        cy.wait(10000)


        cy.wait(20000)
        cy.get('.btn-primary').click({force: true})

        cy.wait(10000)
        cy.get('#mat-select-1 > .mat-select-trigger > .mat-select-value').click({force: true})
        
        cy.wait(5000)
        cy.get('#mat-option-5 > .mat-option-text').click({force: true})
        
        cy.wait(5000)
        cy.get('#mat-select-2 > .mat-select-trigger > .mat-select-value').click({force: true})
        cy.get('#mat-option-10 > .mat-option-text').click({force: true})

        cy.wait(5000)
        cy.get('#mat-select-3 > .mat-select-trigger > .mat-select-value').click({force: true})
        cy.get('#mat-option-13 > .mat-option-text').click({force: true})

        cy.wait(5000)
        cy.get('#mat-select-4 > .mat-select-trigger > .mat-select-value').click({force: true})
        cy.get('#mat-option-17 > .mat-option-text').click({force: true})

        cy.wait(5000)
        cy.get('.footer > .btnClrBlue').click({force: true})

        cy.wait(5000)
        cy.get(':nth-child(3) > .custinput1').click({force: true}).type('2')

        // cy.get('#\31 685615074417 > :nth-child(4) > .custinput1').click({force: true}).type('2')
        // cy.wait(5000)
        // cy.get('#\31 685615074417 > :nth-child(5) > .custinput1').click({force: true}).type('2')
    })
})