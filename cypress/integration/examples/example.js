describe('Example', function () {
    it('Should match screenshot', function () {
      cy.visit('https://google.com');
      cy.matchImageSnapshot('login');
    });
  });