/// <reference types="cypress" />


describe("Login in both Polibras pages", () => {

    it.only('Acesso direto', () => {
          cy.visit('/');
          cy.get('#tenant').type('P111');
          cy.get('#login').type('lucas.araujo@polibrasnet.com.br');
          cy.get('#password').type('XXX');
          cy.get('.ant-form-item-control-input-content > .ant-btn').click();
          cy.wait(10000);
        });
    it('Alterando configurações', () =>{
          cy.visit('https://dev2.polibr.com.br/v8/#/roteirizze/settings/index')
          cy.get('#rc-tabs-0-tab-2').click()
    })
})