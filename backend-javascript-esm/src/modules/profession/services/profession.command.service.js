import ProfessionEntity from '../entities/profession.entity.js';
import { ITEM_CONSTANTS } from '../constants/profession.constant.js';

class CommandService {
  constructor(repository) {
    this.repository = repository;
  }

  async createItem(data) {
    const exists = await this.repository.existsByName(data.name);
    if (exists) {
      throw new Error(ITEM_CONSTANTS.ALREADY_EXISTS);
    }

    const profession = new ProfessionEntity(data);
    const created = await this.repository.createItem(profession.toJSON());

    return new ProfessionEntity(created);
  }

  async updateItem(id, data) {
    const profession = new ProfessionEntity({ id, ...data });
    const updated = await this.repository.updateItem(id, profession.toJSON());
    if (!updated) {
      throw new Error(ITEM_CONSTANTS.NOT_FOUND);
    }

    return new ProfessionEntity(updated);
  }

  async deleteItem(id) {
    const deleted = await this.repository.deleteItem(id);
    if (!deleted) {
      throw new Error(ITEM_CONSTANTS.NOT_FOUND);
    }

    return new ProfessionEntity(deleted);
  }
}

export default CommandService;
