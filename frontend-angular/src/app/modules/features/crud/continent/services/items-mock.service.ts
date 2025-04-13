import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Filters } from './filters.model';
import {
  ItemsResponse,
  ItemsServiceInterface,
  Item
} from './item.model';

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

    const globalTotals = this.computeTotals(ITEMS_MOCK_DATA);
    const currentPageTotals = this.computeTotals(pagedItems);

    const response: ItemsResponse = {
      metadata: {
        pagination: {
          currentPage,
          perPage,
          totalItems,
          totalPages
        }
      },
      totals: {
        global: globalTotals,
        currentPage: currentPageTotals
      },
      data: pagedItems
    };

    return of(response);
  }

  private computeTotals(items: Item[]) {
    const area = items.reduce((sum, item) => sum + (item.area || 0), 0);
    const population = items.reduce((sum, item) => sum + (item.population || 0), 0);
    const countriesCount = items.reduce((sum, item) => sum + (item.countriesCount || 0), 0);
    const density = area > 0 ? parseFloat((population / area).toFixed(5)) : 0;

    return { area, population, countriesCount, density };
  }
}


