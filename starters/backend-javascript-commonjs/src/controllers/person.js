'use strict';

const persons = require('../data/persons');

function getItems(req, res) {
  const result = {
    success: true,
    data: persons,
  };

  res.json(result);
}

module.exports = getItems;
