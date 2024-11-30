'use strict';

const path = require('path');

class ItemService {
  constructor(repository) {
    this.repository = repository;
  }

  async getItems(query) {
    const items = await this.repository.getItems(query);
    return items || [];
  }

  async getItemImagePath(name) {
    const imagePath = path.resolve(__dirname, '../../../../../data/images', `${name}.jpg`);
    const isValid = await this.repository.validateImagePath(imagePath);

    return isValid ? imagePath : null;
  }
}

module.exports = ItemService;
