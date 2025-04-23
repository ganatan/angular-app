'use strict';

const persons = require('./person.mock-data');

function getItems(req, res) {
  const result = {
    success: true,
    data: persons,
  };

  res.json(result);
}

module.exports = getItems;
