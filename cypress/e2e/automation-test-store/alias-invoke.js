/// <reference types="cypress" />


describe("Alias and invoke", () => {
    it("Validade a spcific hair care products", () => { 
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

        //Index = 0 é o primeiro produto
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5) //assertion para mostrar que o tamanho será maior que 5
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    });
})