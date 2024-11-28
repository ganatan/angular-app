'use strict';

class ContinentService {
  constructor(repository) {
    this.repository = repository;
  }

  async getItems() {
    return this.repository.getItems();
  }
}

module.exports = ContinentService;
