// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import { Runnable } from 'mocha'
import './commands'
import 'cypress-mochawesome-reporter/register';
import cypressGrep from '@cypress/grep';
cypressGrep();
// Alternatively you can use CommonJS syntax:
// require('./commands')
import '@cypress/grep'
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

beforeEach('Go to DemoQA Site', function () {
    cy.visit('https://demoqa.com')
    cy.url().then(url => cy.log("URL in E2E Page: ", url))
})