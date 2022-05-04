//{ 
//"baseUrl" : "https://next.privat24.ua"
//"ignoreTestFiles" : "**/examples/*"
/// <reference types="Cypress" />
//}

it('By ID', ()=> {
    cy.visit("https://facebook.com") 
    cy.get('#email')    
 });


 
it('By Class', () => {
    cy.visit("https://docs.cypress.io/api/commands/get.html#Syntax") 
    cy.get('.ds-input')    
 });
 
 it('By tag', () => {
    cy.visit("https://docs.cypress.io/api/commands/get.html#Syntax") 
    cy.get('nav')    
 });

 it('By tag Value', () => {
    cy.visit("https://facebook.com") 
    cy.get('[data-testid="open-registration-form-button"],[role="button"]')    
 });

 it('By diffrent types', () => {
    cy.visit("https://facebook.com") 
    cy.get('buttin[type="button"][titel="close banner"]')    
 });


it('By contains name', () => {
    cy.visit("https://next.privat24.ua/") 
    cy.get('*[class^="card"]')        // все совпадения классов, которые начинаются на card
});

it.only('Using Get with find and Eq', () => {
   cy.visit("https://next.privat24.ua/deposit/open") 
   cy.get('tbody').find('td').find('div').find('button').eq(0)      
});