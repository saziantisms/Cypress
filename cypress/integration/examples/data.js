describe('data test', () => {
    it('toMatchSnapshot - JSON', () => {
      return cy.request('data.json')
        .its('body')
        .toMatchSnapshot();
    });
  
    it('toMatchSnapshot - JSON with options', () => {
      return cy.request('data.json')
        .its('body')
        .toMatchSnapshot({
          ignoreExtraFields: true,
        });
    });
  
    it('toMatchSnapshot - HTML', () => {
      cy.visit('page.html')
        .then(() => {
          cy.get('div').toMatchSnapshot();
        });
    });
  });