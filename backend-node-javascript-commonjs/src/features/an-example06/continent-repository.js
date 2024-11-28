'use strict';

class ContinentRepository {

  constructor() {
  }

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

}

module.exports = ContinentRepository;
