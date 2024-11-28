'use strict';

class ContinentRepository {
  async getItems() {
    return [
      { name: 'continent0001' },
      { name: 'continent0002' },
      { name: 'continent0003' },
      { name: 'continent0004' },
    ];
  }
}

module.exports = ContinentRepository;
