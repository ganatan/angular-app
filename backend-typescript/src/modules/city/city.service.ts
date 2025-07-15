import { City } from './city.model';
import { CityRepositoryInterface } from './city.repository.interface';
import { PaginatedCityResult } from './city.repository.interface';
import { ITEM_CONSTANTS } from './city.constant';

export default class CityService {
  private repository: CityRepositoryInterface;

  constructor(repository: CityRepositoryInterface) {
    this.repository = repository;
  }

  async getItems(query?: any): Promise<PaginatedCityResult> {
    return this.repository.getItems(query);
  }

  async getItemById(id: number): Promise<City> {
    const item = await this.repository.getItemById(id);
    if (!item) {
      throw new Error(ITEM_CONSTANTS.NOT_FOUND);
    }

    return item;
  }

  async createItem(data: City): Promise<City> {
    const exists = await this.repository.existsByName(data.name);
    if (exists) {
      throw new Error(ITEM_CONSTANTS.ALREADY_EXISTS);
    }

    return this.repository.createItem(data);
  }

  async updateItem(id: number, data: City): Promise<City> {
    const updated = await this.repository.updateItem(id, data);

    return updated;
  }

  async deleteItem(id: number): Promise<void> {
    await this.repository.deleteItem(id);
  }
}
