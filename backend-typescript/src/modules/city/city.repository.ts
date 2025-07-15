import DB_CLIENTS from '../../config/db-clients';
import MockRepository from './city.repository.mock';
import PgRepository from './city.repository.pg';
import MysqlRepository from './city.repository.mysql';

import { RepositoryInterface } from './repository.interface';
import { City } from './city.model';
import { PaginatedResult } from '../../shared/types/pagination.type';

export default class Repository implements RepositoryInterface<City> {
  private repository: RepositoryInterface<City>;

  constructor(dbClient: string) {
    switch (dbClient) {
      case DB_CLIENTS.PG:
        this.repository = new PgRepository();
        break;
      case DB_CLIENTS.MYSQL:
        this.repository = new MysqlRepository();
        break;
      case DB_CLIENTS.MOCK:
      default:
        this.repository = new MockRepository();
        break;
    }
  }

  async getItems(query?: any): Promise<PaginatedResult<City>> {
    return this.repository.getItems(query);
  }

  // async getItemById(id: number): Promise<City | undefined> {
  //   return this.repository.getItemById(id);
  // }

  // async createItem(data: City): Promise<City> {
  //   return this.repository.createItem(data);
  // }

  // async updateItem(id: number, data: City): Promise<City> {
  //   return this.repository.updateItem(id, data);
  // }

  // async deleteItem(id: number): Promise<void> {
  //   return this.repository.deleteItem(id);
  // }

  // async existsByName(name: string): Promise<boolean> {
  //   return this.repository.existsByName(name);
  // }
}
