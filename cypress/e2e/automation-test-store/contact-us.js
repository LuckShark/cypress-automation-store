/// <reference types="cypress" />


describe("Test Contact Us Form via Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () => { 
        cy.visit("https://automationteststore.com/");  
        //cy.get('.info_links_footer > :nth-child(5) > a').click(); --vamos mudar para o xpath abaico
        cy.xpath("//a[contains(@href, 'contact')]").click().then(function(linkText){
            cy.log("Clicked on link using text: " + linkText.text());
        })
        //se quisesse poderia tentar tbm:
        //cy.get("a[href$='contact']").click();
        cy.get('#ContactUsFrm_email').type("lucas@email.com")
        cy.get('#ContactUsFrm_email').should('have.attr','name','email')

        cy.get('#ContactUsFrm_first_name').type("Lucas");
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount???")
        //cy.get('.col-md-6 > .btn').click()
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
        cy.log('Teste ACABOU! Top')
    })
    
})