const { Section1 } = require('../objects/section-1')
/// <reference types="Cypress" />

describe('Problem 1', () => {
    it('Verify Table data', () => {
        // Navigate to the Automation Challenge page
        cy.visit('http://localhost:8080')     
        cy.contains('a', 'Section 1').click()
        cy.location('pathname').should('equal', '/section-1')

        // Assert that table is not shown
        cy.get('[data-test=user-table').should('not.have.css', 'display', 'none;')

        // Click the table and verify the data
        cy.get('[data-test=table-toggle-button').click()
        cy.get('[data-test=table-header').get('tr:nth-child(1) > th').should('have.length', 5)
        cy.get('[data-test=user-table').get('tbody tr').next().should('have.length', 10)
        cy.get('[data-test=table-header').get('th').filter(':contains("user")').its('length').should('be.gt', 5)
});

    it('Fill the form and Submit', () => {
        // Fill the form and Submit
        // Verify the form is not displayed
        cy.get('[id=form-toggle-button').should('not.have.css', 'display', 'none;')

        // Click the form and enter the details
        cy.get('[id=form-toggle-button').click()
        cy.get('input[data-test="full-name-input"]').type('Alaya{enter}')
        cy.get('input[data-test="age-input"]').type('17{enter}')
        cy.get('select[data-test="gender-select"]').select('Female').should('have.value', 'female')
        cy.get('[type="checkbox"]').check()
        cy.get('[data-test=submit-btn').click()
    });
});
