// controllers/getPersons.js
const persons = require('../data/persons')

function getPersons(req, res) {
  res.json(persons)
}

module.exports = getPersons
