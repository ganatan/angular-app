'use strict';

class ContinentService {
  async getItems() {
    return [
      { name: 'continent0001' },
      { name: 'continent0002' },
      { name: 'continent0003' },
      { name: 'continent0004' },
    ];
  }
}

module.exports = ContinentService;
