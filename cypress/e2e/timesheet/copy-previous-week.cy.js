/// <reference types="cypress" />

describe('timesheet automation', () => {

    it('login to timeentry site', () => {
        cy.visit('https://timeentrysystem.ad.local/')
        cy.get('#username').type('abc{Enter}')
        cy.get('#password').type('xyz')
        cy.get('#loginclick').click()
        cy.wait(10000)  

        cy.wait(5000)
        cy.contains('Copy previous week time entry').click({force: true})
        cy.wait(5000)
        cy.get('#confimationButton', {timeout: 4000}).click({force: true})

        cy.wait(5000)
        cy.get('.col-sm-8 > :nth-child(1)').click({force: true})
        cy.wait(5000)
        cy.get('.footer > .btnClrBlue').click({force: true})
    })

    xit('copy previous week time sheet entry', () => {
        cy.wait(1000)
        cy.contains('Copy previous week time entry').click()
        cy.wait(2000)
        cy.get('#confimationButton').click() 
    })

    xit('save time sheet details', () => {
        cy.get('.col-sm-8 > :nth-child(1)').click()
        cy.wait(5000)  
    })

    xit('post time sheet details', () => {
        cy.get('.col-sm-8 > :nth-child(2)').click()
        cy.wait(5000)  
    })
})