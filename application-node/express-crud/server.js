const express = require('express')
const app = express()
const port = 3000

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/news', (req, res) => {
  let items = [
    {link:'1980'},
    {link:'1981'},
    {link:'1982'},
    {link:'1983'},
  ]
  res.send(items);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})