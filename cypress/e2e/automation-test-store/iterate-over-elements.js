/// <reference types="cypress" />


describe("Iterate over elements", () => {
    it("Log information", () => { 
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    });
    it("Navigating to specific product pages", () => { 
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    });
})