const oReq = new XMLHttpRequest();
    oReq.open("GET", href as string, true);
    oReq.responseType = "arraybuffer";
    oReq.onload = () => {
        if (oReq.readyState === oReq.DONE) {
            if (oReq.status === 200) {
                // tried parsing the response. 
// looking for any parser which can parse the given reponse body into Text or json
            }
        }
    }


cy.request(href).then((response) => {
    expect(response.status).to.equal(200);
    expect(response.body).not.to.null;
    const headerValue = response.headers["content-disposition"];

    // expect(headerValue).to.equal("attachment; filename=ExperimentEntityList.<FileExtension-PDF | XLSX | DOCX>");

    /// have tried with YAML parser and the "FS" module that cypress and ends up in different console error
    // YAML parser gives consoole error about unidentified character "P".
    // FS module code is shown below
});     

import * as fs from "fs";

function GetPDFContent()
{
    // throws console that fs object doesn't have readFile and same with readFileSync method. 
    fs.readFile("url")..
    fs.readFileSync("url")..
}