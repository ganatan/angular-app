import { Observable } from 'rxjs';
import { Filters } from './filters.model';

export interface Item {
  id: number;
  name: string;
  isoNumeric: string;
  isoAlpha2: string;
  isoAlpha3: string;
  continentName: string;
  continentCode: string;
}

export interface Pagination {
  currentPage: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
}

export interface Metadata {
  pagination: Pagination;
}

export interface ItemsResponse {
  metadata: Metadata;
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
    data: []
  };
}

export interface ItemsServiceInterface {
  getItems(filters?: Filters): Observable<ItemsResponse>;
}