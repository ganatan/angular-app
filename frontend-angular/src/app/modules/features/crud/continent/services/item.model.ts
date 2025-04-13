import { Observable } from 'rxjs';
import { Filters } from './filters.model';

export interface Item {
  id: number;
  name: string;
  code: string;
  area: number;
  population: number;
  countriesCount: number;
  wikipediaLink: string;
  density: number;
}

export interface Pagination {
  currentPage: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
}

export interface TotalsGroup {
  area: number;
  population: number;
  countriesCount: number;
  density: number;
}

export interface Totals {
  currentPage: TotalsGroup;
  global: TotalsGroup;
}

export interface Metadata {
  pagination: Pagination;
}

export interface ItemsResponse {
  metadata: Metadata;
  totals: Totals;
  data: Item[];
}

export function getDefaultItemsResponse(): ItemsResponse {
  return {
    metadata: {
      pagination: {
        currentPage: 1,
        perPage: 10,
        totalItems: 0,
        totalPages: 0
      }
    },
    totals: {
      currentPage: {
        area: 0,
        population: 0,
        countriesCount: 0,
        density: 0
      },
      global: {
        area: 0,
        population: 0,
        countriesCount: 0,
        density: 0
      }
    },
    data: []
  };
}

export interface ItemsServiceInterface {
  getItems(filters?: Filters): Observable<ItemsResponse>;
}
