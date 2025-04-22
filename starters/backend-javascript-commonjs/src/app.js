const express = require('express')
const getPersons = require('./controllers/persons')
const app = express()

app.get('/persons', getPersons)

app.get('/', (req, res) => {
  res.send('backend-javascript');
})

module.exports = app
