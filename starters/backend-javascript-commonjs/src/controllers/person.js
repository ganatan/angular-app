'use strict';

const persons = require('../data/persons');

function getItems(req, res) {
  res.json(persons);
};

module.exports = getItems;
