import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ItemsResponse, ItemsServiceInterface } from './item.model';
import { Filters } from './filters.model';
import { ITEMS_MOCK_DATA } from './items.mock-data';

@Injectable()
export class ItemsMockService implements ItemsServiceInterface {
  getItems(filters: Filters = {}): Observable<ItemsResponse> {
    const currentPage = filters.page ?? 1;
    const perPage = filters.size ?? ITEMS_MOCK_DATA.length;
    const offset = (currentPage - 1) * perPage;

    const pagedItems = ITEMS_MOCK_DATA
      .slice(offset, offset + perPage)
      .map(item => ({ ...item, name: `${item.name} Frontend Mock` }));

    const totalItems = ITEMS_MOCK_DATA.length;
    const totalPages = Math.ceil(totalItems / perPage);

    const response: ItemsResponse = {
      metadata: {
        pagination: {
          currentPage,
          perPage,
          totalItems,
          totalPages
        }
      },
      data: pagedItems
    };

    return of(response);
  }
}