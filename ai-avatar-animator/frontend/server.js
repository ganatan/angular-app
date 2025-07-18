const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist/angular-starter/browser')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/angular-starter/browser', 'index.html'));
});

const port = 4000;
const host = 'localhost';
app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}`);
})

