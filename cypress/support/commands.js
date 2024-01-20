// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js
Cypress.Commands.add('apiLogin', (credentials) => {
    cy.request({
        method: 'POST',
        url: 'https://dev2.polibr.com.br/api/auth/token',
        body:{
            "client_id": "webapp",
            "client_secret": "3f024cf33944cd8165832f48ee58447840867132",
            "grant_type": "password",
            "login": "lucas.araujo@polibrasnet.com.br",
            "password": "XXXXXX",
            "tenant": "P111"
        },
    }).then((response) =>{
        expect(response.status).to.eql(200) //Ver se o login deu certo
        
        //Extraindo informações da resposta
        const {user, token} = response.body
        //Armazena o token e informações do usuário no localStorage
        window.localStorage.setItem('yourAppName:token', token)
        window.localStorage.setItem('yourAppName:user', JSON.stringify(user))
    })
    
})