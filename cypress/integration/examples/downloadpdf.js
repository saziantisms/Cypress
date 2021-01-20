/// <reference types="Cypress" />
describe('Studenta test suite', () => {
  

    //to login to regression
it('TC00-Login',() => {
    
    cy.visit('https://regression-plus.solenovo.fi/education/app/');
    
    cy.clearCookie('JSESSIONID');
    cy.get('#username').type('studentatest');
    cy.get('#password').type('£xper!ment4l');
    cy.get('.btn-submit').click();
    
    Cypress.Cookies.defaults({
        preserve: "JSESSIONID"
      });
    //Cypress.Cookies.preserveOnce('JSESSIONID');
    
});

//TO click english

it('TC001-Home view',() =>{
    //cy.getCookie('JSESSIONID');
    cy.visit('https://regression-plus.solenovo.fi/education/app/');
    cy.get('.fa-user-circle').click();
    cy.get('span:nth-child(3) > a').click();
    cy.url().should('contains', 'https://regression-plus.solenovo.fi/education/app/');
    cy.get('#root').toMatchImageSnapshot({threshold: 0.001,});


});
 // To Search student
it('TC002-Search Student',() =>{
    //cy.getCookie('JSESSIONID');
    cy.visit('https://regression-plus.solenovo.fi/education/app/admin/student/search');
    cy.wait(2000);
    //cy.get('#searchButton > img').click();
    //cy.wait(2000);
    //cy.url().should('contains', 'https://regression-plus.solenovo.fi/education/app/admin/student/search');
    cy.get('#root').toMatchImageSnapshot({threshold: 0.001,});


 });
    
});
