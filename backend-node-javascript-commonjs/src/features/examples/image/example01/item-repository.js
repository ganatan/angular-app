'use strict';

const fs = require('fs').promises;

class ItemRepository {
  constructor() { }

  async getItems(query) {
    try {
      const items = [
        { name: 'continent0001' },
        { name: 'continent0002' },
        { name: 'continent0003' },
        { name: 'continent0004' },
      ];

      return items;
    } catch (error) {
      console.error('Error retrieving examples:', error);

      return null;
    }
  }

  async validateImagePath(imagePath) {
    try {
      await fs.access(imagePath);

      return true;
    } catch {

      return false;
    }
  }

}

module.exports = ItemRepository;
