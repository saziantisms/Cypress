/// <reference types="cypress-downloadfile" />

    it('Download Pdf', () => {
        
        
        cy.downloadFile('http://www.pdf995.com/samples/pdf.pdf','temp/','demo.pdf');
        //cy.readFile('temp/demo.pdf');
               
                
     });  

