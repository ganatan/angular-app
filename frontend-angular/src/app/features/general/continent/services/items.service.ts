import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../../../environments/environment';
import { ItemsResponse } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private backendUrl: string = environment.backendAdminUrl;

  constructor(private http: HttpClient) {}

  getItems(filters: Filters = {}): Observable<ItemsResponse> {
    const params = this.buildQueryParams(filters);
    const url = `${this.backendUrl}/continents${params}`;

    return this.http.get<ItemsResponse>(url).pipe(
      catchError(this.handleError<ItemsResponse>('getItems', this.getDefaultResponse()))
    );
  }

  private buildQueryParams(filters: Filters): string {
    const queryParams = new URLSearchParams();

    if (filters.limit) {
      queryParams.set('limit', filters.limit.toString());
    }

    if (filters.page) {
      queryParams.set('page', filters.page.toString());
    }

    this.addFilterParam(queryParams, 'name', filters.name);
    this.addFilterParam(queryParams, 'code', filters.code);
    this.addFilterParam(queryParams, 'areaMin', filters.areaMin);
    this.addFilterParam(queryParams, 'areaMax', filters.areaMax);
    this.addFilterParam(queryParams, 'populationMin', filters.populationMin);
    this.addFilterParam(queryParams, 'populationMax', filters.populationMax);
    this.addFilterParam(queryParams, 'countriesNumberMin', filters.countriesNumberMin);
    this.addFilterParam(queryParams, 'countriesNumberMax', filters.countriesNumberMax);
    this.addFilterParam(queryParams, 'densityMin', filters.densityMin);
    this.addFilterParam(queryParams, 'densityMax', filters.densityMax);
    this.addFilterParam(queryParams, 'sort', filters.sort);

    return queryParams.toString() ? `?${queryParams.toString()}` : '';
  }

  private addFilterParam(params: URLSearchParams, key: string, value: any): void {
    if (value !== null && value !== undefined) {
      params.set(key, encodeURIComponent(value));
    }
  }

  private getDefaultResponse(): ItemsResponse {
    return {
      paginationTotals: { count: 0, area: 0, population: 0, countriesNumber: 0, density: 0 },
      allTotals: { count: 0, area: 0, population: 0, countriesNumber: 0, density: 0 },
      continents: []
    };
  }

  private handleError<T>(operation = 'operation', result: T = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);

      return of(result);
    };
  }
}

interface Filters {
  page?: number | null;
  limit?: number | null;
  name?: string | null;
  code?: string | null;
  areaMin?: number | null;
  areaMax?: number | null;
  populationMin?: number | null;
  populationMax?: number | null;
  countriesNumberMin?: number | null;
  countriesNumberMax?: number | null;
  densityMin?: number | null;
  densityMax?: number | null;
  sort?: string | null;
}
