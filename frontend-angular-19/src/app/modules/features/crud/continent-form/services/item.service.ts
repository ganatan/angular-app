import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../../../../environments/environment';

import { Item } from './item';
import { URL_ITEMS, DEFAULT_ITEM } from './item.constants'; 

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, HEAD,POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization'
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  backendUrl: string;

  constructor(
    private http: HttpClient) {
    this.backendUrl = environment.backend;
  }

  getItem(id: number): Observable<Item> {
    const url = `${this.backendUrl}/${URL_ITEMS}/${id}`;

    return this.http.get<Item>(url).pipe(
      catchError(this.handleError(`getItem id=${id}`,  DEFAULT_ITEM))
    );
  }

  updateItem(item: Item): Observable<Item> {
    const id = item.id;
    const url = `${this.backendUrl}/${URL_ITEMS}/${id}`;

    return this.http.put<Item>(url, item, httpOptions)
      .pipe(
        catchError(this.handleError(`updateItem id=${id}`, item))
      );
  }

  createItem(item: Item): Observable<Item> {
    const body = JSON.stringify(item);
    const url = `${this.backendUrl}/${URL_ITEMS}`;

    return this.http.post<Item>(url, body, httpOptions).pipe(
      catchError(this.handleError('createItem', item))
    );
  }

  deleteItem(item: Item): Observable<Item> {
    const id = item.id;
    const url = `${this.backendUrl}/${URL_ITEMS}/${id}`;

    return this.http.delete<Item>(url, httpOptions).pipe(
      catchError(this.handleError(`deleteItem id=${id}`, item))
    );
  }

  handleError(operation = 'operation', result = {} as Item) {

    return (error: HttpErrorResponse): Observable<Item> => {
      console.error(`${operation} failed: ${error.message}`);

      return of(result);
    };
  }

}
