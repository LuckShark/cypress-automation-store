/// <reference types="Cypress" />

describe("Test Contact Us Form via WebdriverUni", () => {
    it.only("Should be able to submit a successful submission via contact us form", () => { //happy path
        // para abrir ./node_modules/.bin/cypress open
        //cy.visit("https://www.webdriveruniversity.com/")
        //cy.get('#contact-us').click()
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contac')
        cy.get('[name="first_name"]').type("Luquinhas")
        cy.get('[name="last_name"]').type("Big Boy")
        cy.get('[name="email"]').type("lucas@gmail.com")
        cy.get('textarea.feedback-input').type("Testing comments! Okay")
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text','Thank You for your Message!')
    })

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => { //negative path
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Golden")
        cy.get('[name="last_name"]').type("Little Boy")
        cy.get('textarea.feedback-input').type("Testing comments! Okay")
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');
    })
})