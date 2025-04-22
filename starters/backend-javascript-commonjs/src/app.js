const express = require('express')
const getPersons = require('./controllers/getPersons')
const app = express()

app.get('/persons', getPersons)

module.exports = app



// const express = require('express')
// const app = express()

// const persons = [
//   { id: 1, name: 'Christopher Nolan' },
//   { id: 2, name: 'Quentin Tarantino' },
//   { id: 3, name: 'Steven Spielberg' },
//   { id: 4, name: 'Martin Scorsese' },
//   { id: 5, name: 'James Cameron' },
//   { id: 6, name: 'Ridley Scott' },
//   { id: 7, name: 'Denis Villeneuve' }
// ]

// app.get('/persons', (req, res) => {
//   res.json(persons)
// })

// module.exports = app
