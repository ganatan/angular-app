'use strict';

const items = require('../mocks/city.mock-data');

class Service {
  getItems() {
    return items;
  }

  create(cityData) {
    const newItem = { id: items.length + 1, ...cityData };
    items.push(newItem);

    return newItem;
  }
}

module.exports = new Service();
