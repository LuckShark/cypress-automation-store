/// <reference types="cypress" />


describe("Verifyng variables, cypress commands and jquery commands", () => {
    it("Validate properties of the Contact Us Page", () => { 
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")

        //1# Uses cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain','First name:')

        //2# JQuery Approach (vários comandos ficam diferentes por que são JQuery)
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')
        })

        //3# Embebbed commands (Closure)
        cy.get('#field_11').then(fnText => {
            cy.log(fnText.text()) //vai imprimir 'First name:'
            cy.log(fnText) //vai só exibir o elemento: <div#field_11.form-group.form_field>
        })
    });
})