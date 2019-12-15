import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  filterJsonItem(value: any, id: any) {
    let dataTmp = null;
    value.map((row: any, index: any, data: any) => {
      const idTmp = parseInt(id, 10);
      if (data[index].id === idTmp) {
        dataTmp = data[index];
      }
    });
    return dataTmp;
  }

  filterJsonItemsCount(value: any, text: any) {
    let resultCount = 0;
    if ((text !== undefined) && (text != null)) {
      const lcText = text.toString().toLowerCase();
      const result = value.filter(
        e => (
          (e.name.toLowerCase().indexOf(lcText) === 0)
        )
      );
      resultCount = result.length;
    } else {
      resultCount = value.length;
    }
    return { count: resultCount };
  }

  filterJsonItems(value: any, text: any, itemsPerPage: number, page: number) {
    let result: any;
    if ((text !== undefined) && (text != null)) {
      const lcText = text.toString().toLowerCase();
      result = value.filter(
        e => (
          (e.name.toLowerCase().indexOf(lcText) === 0)
        )
      );
    } else {
      result = value;
    }
    const start = itemsPerPage * (page - 1);
    const end = itemsPerPage * (page - 1) + itemsPerPage - 1;
    const data = [];
    result.map((row: any, index: any) => {
      if ((index >= start) && (index <= end)) {
        data.push(result[index]);
      }
    });
    return data;
  }

  getItemsCount(api: boolean, url: any, query: any): Observable<any> {
    if (api) { url = url + '/count'; } else { url = url + '.json'; }
    let filter = '';
    if (query !== undefined) {
      if ((query !== '') && (query !== null)) { filter = '?q=' + query; }
    }
    const urlParameter = url + filter;
    let result: Observable<any>;
    if (api) {
      result = this.http.get<any>(urlParameter)
        .pipe(
          tap(heroes => this.log(`fetched items`)),
          catchError(this.handleError('getItems', []))
        );
    } else {
      result = this.http.get<any>(urlParameter)
        .pipe(
          map((value: string) => this.filterJsonItemsCount(value, query)),
          catchError(this.handleError('getItems', []))
        );
    }
    return result;
  }

  getItems(api: boolean, url: string, itemsPerPage: number, page: number, query: any): Observable<any> {
    if (!api) { url = url + '.json'; }
    let filter = '';
    if ((itemsPerPage !== undefined) || (page !== undefined) || (query !== undefined)) {
      let limit: number;
      let offset: number;
      limit = itemsPerPage;
      offset = 0;
      if (page === 0) {
        page = 1;
      }
      if (page !== undefined) {
        offset = (page - 1) * itemsPerPage;
      }
      if (query !== undefined) {
        if ((query !== '') && (query !== null)) {
          filter = '?q=' + query;
        }
      }
      if (filter !== '') {
        filter = filter + '&limit=' + limit + '&offset=' + offset;
      } else {
        filter = '?limit=' + limit + '&offset=' + offset;
      }
    }
    const urlParameter = url + filter;
    let result: Observable<any>;
    if (api) {
      result = this.http.get<any[]>(urlParameter)
        .pipe(
          catchError(this.handleError('getItems', []))
        );
    } else {
      result = this.http.get<any>(urlParameter)
        .pipe(
          map((value: string) => this.filterJsonItems(value, query, itemsPerPage, page)),
          catchError(this.handleError('getItems', []))
        );
    }
    return result;
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

