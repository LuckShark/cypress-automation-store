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
 //       cy.get("a[href*='product/category&path=']").contains("Skincare").click()

        // O CÓDIGO VAI FALHAR
 //     const header = cy.get("h1 .maintext"); //pega todos os h1 que tem uma classe (.) com 'maintext' escrito
   //   cy.log(header.text()) //.text() é um comando jquery -> VAI FALHAR O TESTE

        cy.get("h1 .maintext").then(($headerText) => { //usei o cyget para localizar o header; depois usei o then para colocar ele no próximo bloco de código
            const headerText = $headerText.text() //criei uma constante e usei um comando jquery para extrair o texto
            cy.log("Found header text: " + headerText) //só pra confirmar que funcionou, usei o cy.log para mostrar o texto
        })

    });
})