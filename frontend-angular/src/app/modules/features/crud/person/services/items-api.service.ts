import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

import { environment } from '../../../../../../environments/environment';
import { addFilterParam } from '../../../../../shared/utils/query-utils';

import { v4 as uuidv4 } from 'uuid';

import { ITEM_CONSTANTS } from './item.constants';
import { Filters } from './filters.model';
import {
  ItemsResponse,
  ItemsServiceInterface,
  getDefaultItemsResponse
} from './item.model';

@Injectable()
export class ItemsApiService implements ItemsServiceInterface {
  private http = inject(HttpClient);
  private backendUrl = environment.backend;

  getItems(filters: Filters = {}): Observable<ItemsResponse> {
    const params = this.buildQueryParams(filters);
    const url = `${this.backendUrl}/${ITEM_CONSTANTS.RESOURCE_NAME}${params}`;

    const correlationId = uuidv4();

    const headers = { 'X-Correlation-Id': correlationId };

    return this.http.get<ItemsResponse>(url, { headers }).pipe(
      catchError(this.handleError('getItems', getDefaultItemsResponse()))
    );
  }

  private buildQueryParams(filters: Filters): string {
    const queryParams = new URLSearchParams();

    if (filters.page) { queryParams.set('page', filters.page.toString()); }
    if (filters.size) { queryParams.set('size', filters.size.toString()); }

    addFilterParam(queryParams, 'sort', filters.sort);

    addFilterParam(queryParams, 'name', filters.name);

    return queryParams.toString() ? `?${queryParams.toString()}` : '';
  }

  private handleError<T>(operation: string, result: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);

      return of(result);
    };
  }

}
