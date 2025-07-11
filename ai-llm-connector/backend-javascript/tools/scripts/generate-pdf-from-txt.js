import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';

const DOCS_DIR = path.resolve('./ai-docs/scripts');
const OUT_DIR = path.resolve('./ai-docs/pdf/details');
const GLOBAL_OUT_FILE = path.resolve('./ai-docs/pdf/documentation-generale.pdf');

const safeText = (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

if (!fs.existsSync(OUT_DIR)) { fs.mkdirSync(OUT_DIR, { recursive: true }); }

const files = fs.readdirSync(DOCS_DIR).filter(file => file.endsWith('.md'));
if (files.length === 0) {
  console.log('⚠️ Aucun fichier .md trouvé.');
}

const globalDoc = new PDFDocument({ margin: 40 });
globalDoc.pipe(fs.createWriteStream(GLOBAL_OUT_FILE));
globalDoc.fontSize(20).fillColor('#333').text('Documentation technique', { align: 'center' }).moveDown();

files.forEach((file) => {
  const inputPath = path.join(DOCS_DIR, file);
  const outputPath = path.join(OUT_DIR, file.replace('.md', '.pdf'));

  const raw = fs.readFileSync(inputPath, 'utf-8');
  const doc = new PDFDocument({ margin: 40 });
  doc.pipe(fs.createWriteStream(outputPath));

  const blocks = raw.split(/```js|```/);

  const cleanTitle = file.replace('.md', '');
  const title = safeText(cleanTitle);

  for (const targetDoc of [globalDoc, doc]) {
    targetDoc.addPage();
    targetDoc.fontSize(16).fillColor('#000').text(`Fichier : ${title}`, { align: 'left' }).moveDown();
  }

  for (let index = 0; index < blocks.length; index++) {
    const isCode = index % 2 === 1;
    const content = blocks[index].trim();
    if (!content) { continue; }

    const plainText = safeText(content);

    for (const targetDoc of [globalDoc, doc]) {
      targetDoc
        .font(isCode ? 'Courier' : 'Helvetica')
        .fontSize(isCode ? 9 : 11)
        .fillColor('#000')
        .text(plainText, { lineGap: 4 })
        .moveDown();
    }
  }

  doc.end();
  console.log(`✅ PDF individuel : ${outputPath}`);
});

globalDoc.end();
console.log(`📚 PDF global généré : ${GLOBAL_OUT_FILE}`);

