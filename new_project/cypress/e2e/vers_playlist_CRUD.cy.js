/// <reference types="cypress" />

// Method for filling out the login form
fillForm(username, password, confirmPassword); {
    this.usernameInput.type(username);
    this.passwordInput.type(password);
    this.confirmPasswordInput.type(confirmPassword);
}
