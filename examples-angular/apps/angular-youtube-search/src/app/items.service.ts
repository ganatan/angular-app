import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) {
  }

  getItems(url: string): Observable<any> {
    const result = this.http.get<any>(url)
      .pipe(
        catchError(this.handleError('getItems', []))
      );

    return result;
  }

  private handleError<T>(operation = 'operation', result = {} as T) {

    return (error: HttpErrorResponse): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);

      return of(result);
    };
  }

}

