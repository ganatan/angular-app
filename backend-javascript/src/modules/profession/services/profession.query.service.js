import ProfessionEntity from '../entities/profession.entity.js';
import { ITEM_CONSTANTS } from '../constants/profession.constant.js';

class ProfessionQueryService {
  constructor(repository) {
    this.repository = repository;
  }

  async getItems(query) {
    const result = await this.repository.getItems(query);
    result.data = result.data.map(item => new ProfessionEntity(item));

    return result;
  }

  async getItemById(id) {
    const item = await this.repository.getItemById(id);
    if (!item) {
      throw new Error(ITEM_CONSTANTS.NOT_FOUND);
    }

    return new ProfessionEntity(item);
  }
}

export default ProfessionQueryService;
