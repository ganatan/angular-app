import { PaginatedResult } from '../../shared/types/pagination.type';

export interface RepositoryInterface<T> {
  getItems(query?: any): Promise<PaginatedResult<T>>;
  // getItemById(id: number): Promise<T | undefined>;
  // createItem(data: T): Promise<T>;
  // updateItem(id: number, data: T): Promise<T>;
  // deleteItem(id: number): Promise<void>;
  // existsByName(name: string): Promise<boolean>;
}
