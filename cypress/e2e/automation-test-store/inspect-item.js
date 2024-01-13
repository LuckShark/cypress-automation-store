/// <reference types="cypress" />


describe("Inspect Automation Test Store Items using chain of commands", () => {
    it("Click on the first item using item HEADER", () => { 
        cy.visit("https://automationteststore.com/");  
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
    })
    it.only("Click on the first item using item TEXT", () => { 
        cy.visit("https://automationteststore.com/");  
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText){
            console.log("Selected the following item: " + itemHeaderText.text()); //.text() é um comando jQuery
        })
    })
    it.only("Click on the first item using item INDEX", () => { 
        cy.visit("https://automationteststore.com/");  
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
    })
    
})