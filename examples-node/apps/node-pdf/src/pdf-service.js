const PDFDocument = require('pdfkit');
const fs = require('fs');

const fileName = './apps/node-pdf/pdf/exemple.pdf';

module.exports = class ReportService {

  generateTimeReport(items) {
    return new Promise(function (resolve) {
      try {

        const doc = new PDFDocument();
        doc.pipe(fs.createWriteStream(fileName));
        doc.fontSize(20).text('Bonjour, voici un exemple de fichier PDF généré avec Node.js et pdfkit!', {
          align: 'center'
        });
        doc.font('Helvetica-Bold');
        let title = 'aaaa';
        doc.text(title, { align: 'center' });
        doc.font('Helvetica');
        doc.font('Helvetica-Bold');
        let label = '1111';
        doc.text(`${label} : `, { continued: true });
        doc.font('Helvetica');
        let value = 'bbbb';
        doc.text(value);
        items.forEach(element => {
          console.log('00000000001:' + JSON.stringify(element));
          let name = element['name'];
          doc.font('Helvetica-Bold');
          doc.text(name, { align: 'center' });
          doc.font('Helvetica');
        });
        doc.end();
        setTimeout(() => {
          resolve(fs.readFileSync(fileName))
        }, 1000);
      } catch (err) {
        reject(err);
      }
    });
  }
}

