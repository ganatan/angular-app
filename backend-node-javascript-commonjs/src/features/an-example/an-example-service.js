'use strict';

class AnExampleService {
  constructor() {
  }

  async getItems(req) {
    try {
      const items = [
        { name: 'example0001' },
        { name: 'example0002' },
        { name: 'example0003' },
        { name: 'example0004' },
      ];

      return items;
    } catch (error) {
      console.error('Error retrieving examples:', error);

      return null;
    }
  }
}

module.exports = AnExampleService;
