it('tests a pdf', () => {
    cy.task('getPdfContent', 'test.pdf').then(content => {
      // test you pdf content here, with expect(this and that)...
      
    })
  })