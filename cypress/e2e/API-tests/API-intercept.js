/// <reference types="cypress" />

describe('Learning API Intercept', function (){
    it('Simple API Intercept/ Spy API request', function(){
        cy.visit('https://dummyapi.io/explorer')

        cy.intercept({
            path : '/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10'
        }).as('commentsList')

        cy.get('.flex > :nth-child(5)').click()
        cy.wait('@commentsList').then(intercept => {
            expect(intercept.response.body.limit).equal(10) //essa informação está no payload limit = 10. Estou só fazendo uma assertion
        })
    })

    it('Mock API Response', function(){
        cy.visit('https://dummyapi.io/explorer')

        cy.intercept('GET', '/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10', {limit: 10, Name:'Testing stuff'}).as('commentsList')

        cy.get('.flex > :nth-child(5)').click()
        cy.wait('@commentsList').then(intercept => {
            expect(intercept.response.body.limit).equal(10) //mudei a response para 20 
            expect(intercept.response.body.Name).equal('Testing stuff') 
        })
    })
    
})