/// <reference types="cypress" />

describe("Alias and invoke challenge", () =>{

    it("Count the number of thumbnails", () => {
        cy.visit("https://automationteststore.com/")
        cy.get(".thumbnail").as("thumbSum")
        cy.get("@thumbSum").should("have.length", 16)
        
    });

    //Nesse segundo teste, o INVOKE chamará o atributo
    it("Select the title of add cart", () => {
        cy.visit("https://automationteststore.com/")
        cy.get(".thumbnail").as("thumbSum")
        cy.get("@thumbSum").find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
   //     cy.get(".productcart").invoke('title').as("addCart")
   //     cy.get("@addCart").should('contain', 'Add to Cart')
    });
});

//OBS: Nesse último INCLUDE deve ser 100% preciso, cuidado com upper e lower cases