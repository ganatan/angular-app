import DB_CLIENTS from '../../config/db-clients';

import MockRepository from './city.repository.mock';
// import PgRepository from './city.repository.pg';
// import MysqlRepository from './city.repository.mysql';

import { CityRepositoryInterface } from './city.repository.interface';
import { City } from './city.model';
import { PaginatedCityResult } from './city.repository.interface';

export default class Repository implements CityRepositoryInterface {
  private repository: CityRepositoryInterface;

  constructor(dbClient: string) {
    switch (dbClient) {
      // case DB_CLIENTS.PG:
      //   this.repository = new PgRepository();
      //   break;
      // case DB_CLIENTS.MYSQL:
      //   this.repository = new MysqlRepository();
      //   break;
      case DB_CLIENTS.MOCK:
      default:
        this.repository = new MockRepository();
        break;
    }
  }

  async getItems(query?: any): Promise<PaginatedCityResult> {
    return this.repository.getItems(query);
  }

  async getItemById(id: number): Promise<City | null> {
    return this.repository.getItemById(id);
  }

  async createItem(data: City): Promise<City> {
    return this.repository.createItem(data);
  }

  async updateItem(id: number, data: City): Promise<City> {
    return this.repository.updateItem(id, data);
  }

  async deleteItem(id: number): Promise<void> {
    return this.repository.deleteItem(id);
  }

  async existsByName(name: string): Promise<boolean> {
    return this.repository.existsByName(name);
  }
}
