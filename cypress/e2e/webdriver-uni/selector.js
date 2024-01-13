/// <reference types="cypress" />

describe("Selector examples", () => {
    it("Examples of Selectors via WebdriverUni Contact Us Page", () =>{
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")

        //By tag name
        cy.get("input")

        //By attribute name and value
        cy.get("input[name='first_name']")
        cy.get("input[name='email']")

        //By ID (EASYEST)
        cy.get("#contact_me")

        //By class
        cy.get(".feedback-input")

        //By two different attributes
        cy.get("[name='email'][placeholder='Email Address']")

        //By Xpath
        cy.xpath("//input[@name='first_name']")


        
    })
})