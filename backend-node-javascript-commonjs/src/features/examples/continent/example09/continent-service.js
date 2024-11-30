'use strict';

class ContinentService {
  constructor(repository) {
    this.repository = repository;
  }

  async getItems(query) {
    const items = await this.repository.getItems(query);

    return items || [];
  }
}

module.exports = ContinentService;
