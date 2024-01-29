/// <reference types="cypress" />

describe("Login in Test Automation Heroku app from YT", () =>{
    it("Login with succes in the homepage", () =>{
        cy.visit("https://curso-automacao-web-app.herokuapp.com/login")
        cy.get("#yourUsername").type("admin@automacao.org.br")
        cy.get("#yourPassword").type("password01")
        cy.get("#logginButton").click()
        //cy.contains('h1', 'Dashboard') //esse não faz ASSERT
        cy.get('h1').should('contain.text', 'Dashboard')
    })
})