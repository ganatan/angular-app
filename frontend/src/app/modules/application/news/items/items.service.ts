import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items: any;
  constructor(private http: HttpClient) { }

  getItems(url: string): Observable<any> {
    return this.http.get<any>(url)
      .pipe(
        tap(items => this.log(`fetched items`)),
        catchError(this.handleError('getItems', []))
      );
  }

  getItem(url: string): Observable<any> {
    return this.http.get<any>(url)
      .pipe(
        tap(items => this.log(`fetched items`)),
        catchError(this.handleError('getItems', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      
      return of(result as T);
    };
  }

  private log(message: string) {
  }


}


