const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    baseUrl: "https://dev2.polibr.com.br/v8/#/login/auth",
    defaultCommandTimeout: 10000, //funciona para todos os comandos
    pageLoadTimeout: 100000, //só funciona no cy.visit
    requestTimeout: 100000,
    responseTimeout: 100000
  },
});
