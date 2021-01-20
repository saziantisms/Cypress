/// <reference types="Cypress" />
describe('Studenta test suite', () => {
    
   /* before(() => {
        // runs once before all tests in the block
      })*/
    
      beforeEach(() => {
        // runs before each test in the block
        
            cy.visit('https://regression-plus.solenovo.fi/education/app/');
            cy.get('#username').type('studentatest')
            cy.get('#password').type('£xper!ment4l')
            cy.get('.btn-submit').click();
        
      });
    
     /* afterEach(() => {
        // runs after each test in the block
      })
    
      after(() => {
        // runs once after all tests in the block
      })

    //to login to regression
it('TC00-Login,()',() => {
    cy.visit('https://regression-plus.solenovo.fi/education/app/');
    cy.get('#username').type('studentatest')
    cy.get('#password').type('£xper!ment4l')
    cy.get('.btn-submit').click();
});*/

//TO click english

it('TC001-Home view',() =>{
    cy.visit('https://regression-plus.solenovo.fi/education/app/');
    cy.get('.fa-user-circle').click();
    cy.get('span:nth-child(3) > a').click();
    cy.url().should('contains', 'https://regression-plus.solenovo.fi/education/app/');
    cy.get('#root').toMatchImageSnapshot({threshold: 0.001,});

});
 // To Search student
it('TC002-Search Student',() =>{
    cy.visit('https://regression-plus.solenovo.fi/education/app/admin/student/search');
   // cy.click('#searchButton > img');
    cy.wait(2000);
    cy.get('#searchButton').click({force: true});
    cy.wait(2000);
    cy.url().should('contains', 'https://regression-plus.solenovo.fi/education/app/admin/student/search');
    cy.get('#root').toMatchImageSnapshot({threshold: 0.001,});


 });
    
});
