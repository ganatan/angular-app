'use strict';

class ContinentService {
  constructor(repository) {
    this.repository = repository;
  }

  async getItems(filters) {
    const items = await this.repository.getItems(filters);

    return items || [];
  }

}

module.exports = ContinentService;
