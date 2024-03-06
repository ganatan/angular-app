const PDFDocument = require('pdfkit');
const fs = require('fs');

const fileName = './apps/node-pdf/pdf/exemple.pdf';

module.exports = class PdfService {

  print(items) {
    return new Promise(function (resolve, reject) {
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

  printArray(items) {
    return new Promise(function (resolve, reject) {
      try {
        const data = items;
        const doc = new PDFDocument();
        const writeStream = fs.createWriteStream(fileName);
        doc.pipe(writeStream);
        doc.fontSize(12).text('Tableau de données', { align: 'center' }).moveDown(0.5);
        const tableWidth = 400;
        const rowHeight = 20;
        const headerHeight = 25;
        const table = {
          headers: Object.keys(data[0]),
          rows: data.map(obj => Object.values(obj))
        };
        const columnWidth = tableWidth / table.headers.length;
        doc.lineWidth(1).moveTo(100, 100).lineTo(100 + tableWidth, 100).stroke();
        table.headers.forEach((header, index) => {
          doc.text(header, 100 + (columnWidth * index) + 5, 100 + 5);
        });
        table.rows.forEach((row, rowIndex) => {
          const y = 100 + headerHeight + (rowHeight * (rowIndex + 1));
          doc.lineWidth(1).moveTo(100, y).lineTo(100 + tableWidth, y).stroke();
          row.forEach((cell, cellIndex) => {
            doc.text(cell.toString(), 100 + (columnWidth * cellIndex) + 5, y + 5);
          });
        });
        doc.end();
        setTimeout(() => {
          resolve(fs.readFileSync(fileName))
        }, 1000);
        console.log(`PDF créé avec succès à l'emplacement : ${fileName}`);
      } catch (err) {
        console.error(`Une erreur est survenue : ${err}`);
        reject(err);
      }
    });
  }

}
