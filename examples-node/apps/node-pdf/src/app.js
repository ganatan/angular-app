const PdfService = require('./pdf-service');
const pdfService = new PdfService();

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('pdf api')
})

app.get('/pdf', async (req, res) => {
  let items =
    [
      { name: '1111' },
      { name: '2222' }
    ];
  let result = await pdfService.print(items);
  res.setHeader('Content-Type', 'application/pdf');
  res.send(result);
})

app.get('/pdf-json', async (req, res) => {
  let items =
    [
      { name: '1111', value: 'aaaa', type: 'xxxx' },
      { name: '2222', value: 'bbbb', type: 'yyyy' },
    ];
  let result = await pdfService.printArray(items);
  res.setHeader('Content-Type', 'application/pdf');
  res.send(result);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



