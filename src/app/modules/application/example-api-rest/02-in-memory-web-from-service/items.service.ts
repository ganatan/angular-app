import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Item } from './item';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class ItemsService {

  url = 'api';
  endpoint = '/movies';

  constructor(
    private http: HttpClient) {
  }

  //  getItems(): Observable<Item[]> {
  getItems(): any {
    return this.http.get(this.url + this.endpoint);
    /*    return this.http.get<Item[]>(this.url + this.endpoint)
          .pipe(
            catchError(this.handleError('getItems', []))
          );*/
  }

  getItem(id: any): Observable<any> {
    return this.http.get(this.url + this.endpoint + '/' + id);
  }

  /*  getItem(id: any): Observable<Item[]> {
      return this.http.get<Item[]>(this.url + this.endpoint + '/' + id)
        .pipe(
          catchError(this.handleError('getItem', []))
        );
    } */

  searchItems(term: string): Observable<Item[]> {
    term = term.trim();
    const options = term ?
      { params: new HttpParams().set('name', term) } : {};
    return this.http.get<Item[]>(this.url + this.endpoint, options)
      .pipe(
        catchError(this.handleError<Item[]>('searchItems', []))
      );
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.url + this.endpoint, item, httpOptions)
      .pipe(
        catchError(this.handleError('addItem', item))
      );
  }

  deleteItem(id: number): Observable<{}> {
    const url = `${this.url + this.endpoint}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteItem'))
      );
  }

  updateItem(item: Item): Observable<Item> {
    return this.http.put<Item>(this.url + this.endpoint, item, httpOptions)
      .pipe(
        catchError(this.handleError('updateItem', item))
      );
  }


  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string): void {
  }


}
