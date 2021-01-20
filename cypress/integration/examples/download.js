/// <reference types="Cypress" />

/*context('Download Pdf', () => {

    it('Download Pdf', () => {
        
        const pdfUrl = 'http://www.pdf995.com/samples/pdf.pdf';

        cy.request({ url: pdfUrl, gzip: false})
            .then((response) => {
                const fileName = 'test1';
                const filePath = 'temp/' + fileName + '.pdf';

                cy.writeFile(filePath, response.body, 'binary');
                cy.readFile(filePath);
            });

        

    });
});*/

context('Download Pdf', () => {

    it('Download Pdf', () => {
        
        //const pdfUrl = 'http://www.pdf995.com/samples/pdf.pdf';
        cy.visit('http://www.pdf995.com/samples/pdf.pdf');
        

    });
});


