import { City } from './city.model';
import { RepositoryInterface } from './repository.interface';
import { PaginatedResult } from '../../shared/types/pagination.type';
// import { ITEM_CONSTANTS } from '../constants/city.constant';

export default class Service {
  private repository: RepositoryInterface<City>;

  constructor(repository: RepositoryInterface<City>) {
    this.repository = repository;
  }

  async getItems(query?: any): Promise<PaginatedResult<City>> {
    return this.repository.getItems(query);
  }

  // async getItemById(id: number): Promise<City> {
  //   const item = await this.repository.getItemById(id);
  //   if (!item) {
  //     throw new Error(ITEM_CONSTANTS.NOT_FOUND);
  //   }
  //   return item;
  // }

  // async createItem(data: City): Promise<City> {
  //   if (await this.repository.existsByName(data.name)) {
  //     throw new Error(ITEM_CONSTANTS.ALREADY_EXISTS);
  //   }
  //   return this.repository.createItem(data);
  // }

  // async updateItem(id: number, data: Partial<City>): Promise<City> {
  //   const updated = await this.repository.updateItem(id, data);
  //   if (!updated) {
  //     throw new Error(ITEM_CONSTANTS.NOT_FOUND);
  //   }
  //   return updated;
  // }

  // async deleteItem(id: number): Promise<City> {
  //   const deleted = await this.repository.deleteItem(id);
  //   if (!deleted) {
  //     throw new Error(ITEM_CONSTANTS.NOT_FOUND);
  //   }
  //   return deleted;
  // }
}
