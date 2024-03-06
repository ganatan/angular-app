const ReportService = require('./pdf-service');
const reportGenerator = new ReportService();

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
  let result = await reportGenerator.generateTimeReport(items);
  res.setHeader('Content-Type', 'application/pdf');
  res.send(result);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



