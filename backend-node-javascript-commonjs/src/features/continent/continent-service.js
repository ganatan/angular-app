'use strict';

class ContinentService {
  constructor(repository) {
    this.repository = repository;
  }

  async getItems(filters) {
    const items = await this.repository.getItems(filters);

    return items || [];
  }

  async getItem(id) {
    return await this.repository.getItem(id);
  }

  async createItem(itemData) {
    return await this.repository.createItem(itemData);
  }

  async updateItem(id, itemData) {
    return await this.repository.updateItem(id, itemData);
  }

  async deleteItem(id) {
    return await this.repository.deleteItem(id);
  }
}

module.exports = ContinentService;
