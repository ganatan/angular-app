import { City } from '../../modules/city/city.model';

export interface PaginationMetadata {
  pagination: {
    currentPage: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
  };
}

export interface PaginatedCityResult {
  metadata: PaginationMetadata;
  data: City[];
}

export interface CityRepositoryInterface {
  getItems(query?: any): Promise<PaginatedCityResult>;
  getItemById(id: number): Promise<City | null>;
  createItem(data: City): Promise<City>;
  updateItem(id: number, data: City): Promise<City>;
  deleteItem(id: number): Promise<void>;
  existsByName(name: string): Promise<boolean>;
}
