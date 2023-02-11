/// <reference types="cypress" />
// Class for login form page object
class LoginFormPage {
    constructor() {
        this.usernameInput = cy.get('#username');
        this.passwordInput = cy.get('#password');
        this.confirmPasswordInput = cy.get('#confirmPassword');
        this.confirmButton = cy.get('#confirmButton');
    }


    // Method for submitting the login form
    submitForm() {
        this.confirmButton.click();
    }
}

// Test for login form
describe('Login form', () => {
    it('Should allow a user to log in with valid credentials', () => {
        const loginForm = new LoginFormPage();

        cy.visit('/login');

        loginForm.fillForm('testuser', 'testpassword', 'testpassword');
        loginForm.submitForm();

        // Check if the user is redirected to the home page after logging in
        cy.url().should('include', '/home');
    });

    it('Should show an error message if the password and confirm password fields do not match', () => {
        const loginForm = new LoginFormPage();

        cy.visit('/login');

        loginForm.fillForm('testuser', 'testpassword', 'differentpassword');
        loginForm.submitForm();

        // Check if the error message is displayed
        cy.get('#errorMessage').should('be.visible').and('contain', 'Passwords do not match');
    });
});
