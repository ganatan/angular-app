'use strict';

const items = require('../mocks/person.mock-data');

function getItems(req, res) {
  const result = {
    success: true,
    data: items,
  };

  res.json(result);
}

module.exports = getItems;
