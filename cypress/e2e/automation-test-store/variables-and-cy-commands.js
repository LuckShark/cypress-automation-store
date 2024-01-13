/// <reference types="cypress" />


describe("Verifyng variables, cypress commands and jquery commands", () => {
    it("Navigating to specific product pages", () => { 
        cy.visit("https://automationteststore.com/")
        //vamos crirar seletores dinamicos usando propriedades que são comuns ao Makeup e ao Skincare
 //       const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
 //       makeupLink.click();
 //       const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
 //       skincareLink.click();
        //this approach is not recommended cuz even though the lines of code work, if we start extending upon our tests, we can't guarantee that this specific logic will continue to work.

        //RECOMMENDED APPROACH
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        cy.get("a[href*='product/category&path=']").contains("Skincare").click()

    });
})