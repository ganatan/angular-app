class BaseService {
  constructor(repository, constants = {}) {
    this.repository = repository;
    this.constants = constants;
  }

  async getItems(query) {
    return await this.repository.getItems(query);
  }

  async getItemById(id) {
    const item = await this.repository.getItemById(id);
    if (!item) {
      throw new Error(this.constants.NOT_FOUND || 'Not found');
    }

    return item;
  }

  async createItem(data) {
    if (await this.repository.existsByName?.(data.name)) {
      throw new Error(this.constants.ALREADY_EXISTS || 'Already exists');
    }

    return await this.repository.createItem(data);
  }

  async updateItem(id, data) {
    const updated = await this.repository.updateItem(id, data);
    if (!updated) {
      throw new Error(this.constants.NOT_FOUND || 'Not found');
    }

    return updated;
  }

  async deleteItem(id) {
    const deleted = await this.repository.deleteItem(id);
    if (!deleted) {
      throw new Error(this.constants.NOT_FOUND || 'Not found');
    }

    return deleted;
  }
}

export default BaseService;
