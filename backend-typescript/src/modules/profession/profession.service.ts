import { ITEM_CONSTANTS } from './profession.constant';

interface Profession {
  id: number;
  name: string;
  [key: string]: any;
}

interface ProfessionRepository {
  getItems(query?: Record<string, any>): Promise<{ metadata: any; data: Profession[] }>;
  getItemById(id: number): Promise<Profession | null>;
  createItem(data: Partial<Profession>): Promise<Profession>;
  updateItem(id: number, data: Partial<Profession>): Promise<Profession | null>;
  deleteItem(id: number): Promise<Profession | null>;
  existsByName(name: string): Promise<boolean>;
}

class ProfessionService {
  private repository: ProfessionRepository;

  constructor(repository: ProfessionRepository) {
    this.repository = repository;
  }

  async getItems(query?: Record<string, any>) {
    return await this.repository.getItems(query);
  }

  async getItemById(id: number) {
    const item = await this.repository.getItemById(id);
    if (!item) {
      throw new Error(ITEM_CONSTANTS.NOT_FOUND);
    }
    return item;
  }

  async createItem(data: Partial<Profession>) {
    const exists = await this.repository.existsByName(data.name || '');
    if (exists) {
      throw new Error(ITEM_CONSTANTS.ALREADY_EXISTS);
    }
    return await this.repository.createItem(data);
  }

  async updateItem(id: number, data: Partial<Profession>) {
    const updated = await this.repository.updateItem(id, data);
    if (!updated) {
      throw new Error(ITEM_CONSTANTS.NOT_FOUND);
    }
    return updated;
  }

  async deleteItem(id: number) {
    const deleted = await this.repository.deleteItem(id);
    if (!deleted) {
      throw new Error(ITEM_CONSTANTS.NOT_FOUND);
    }

    return deleted;
  }
}

export default ProfessionService;
