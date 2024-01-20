/// <reference types="cypress" />

describe("Login in Polibras new Web for Roteirizze", () => {

    it('Acesso fácil via API', () => {
        cy.apiLogin();  // Chama o comando personalizado apiLogin

        // Você pode adicionar mais comandos Cypress aqui, se necessário
        cy.log('Comando Cypress adicional');
//Visita a página inicial após o login
        cy.visit('https://dev2.polibr.com.br/v8/#/analizze/dashboard/index')
        cy.log('Teoricamente, entrou no site')
    });
});
