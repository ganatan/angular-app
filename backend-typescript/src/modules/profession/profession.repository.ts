import DB_CLIENTS from '../../core/config/db-clients';
import MockRepository from './profession.repository.mock';

interface Profession {
  id: number;
  name: string;
  [key: string]: any;
}

interface BaseRepository {
  getItems(query?: Record<string, any>): Promise<{ metadata: any; data: Profession[] }>;
  getItemById(id: number): Promise<Profession | null>;
  createItem(data: Partial<Profession>): Promise<Profession>;
  updateItem(id: number, data: Partial<Profession>): Promise<Profession | null>;
  deleteItem(id: number): Promise<Profession | null>;
  existsByName(name: string): Promise<boolean>;
}

class Repository implements BaseRepository {
  private repository: BaseRepository;

  constructor(dbClient: string) {
    switch (dbClient) {
      case DB_CLIENTS.PG:
        // this.repository = new PGRepository();
        this.repository = new MockRepository();
        break;
      case DB_CLIENTS.MYSQL:
        // this.repository = new MySQLRepository();
        this.repository = new MockRepository();
        break;
      case DB_CLIENTS.MOCK:
      default:
        this.repository = new MockRepository();
        break;
    }
  }

  async getItems(query?: Record<string, any>) {
    return this.repository.getItems(query);
  }

  async getItemById(id: number) {
    return this.repository.getItemById(id);
  }

  async createItem(data: Partial<Profession>) {
    return this.repository.createItem(data);
  }

  async updateItem(id: number, data: Partial<Profession>) {
    return this.repository.updateItem(id, data);
  }

  async deleteItem(id: number) {
    return this.repository.deleteItem(id);
  }

  async existsByName(name: string) {
    return this.repository.existsByName(name);
  }
}

export default Repository;
