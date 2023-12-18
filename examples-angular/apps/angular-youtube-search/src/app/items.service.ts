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


  /*
     getItems(): Observable<Array<Item> | null> {
    getItems(): Observable<Array<Item> | HttpErrorResponse> {
      let url = this.backendUrl + '/continents'
       let url = 'http://localhost:4444/continents';
      let item: Item;
      item = new Item();
      item.id = 1111;
  
      let items = new Array<Item>;
      items.push(item);
  
      item = new Item();
      item.id = 2222;
      items.push(item);
  
      console.log('00000000001:service:getItems:' + JSON.stringify(items))
  
       let items :Item[];
       items = [];
  
       const result = this.http.get<any>(url, { observe: 'response' })
      const result = this.http.get<any>(url, { observe: 'response' })
         const result = this.http.get<any>(url, { observe: 'response' })
        .pipe(
          catchError(this.handleError('getItems', []))
        );
  
      return result;
    }
  
    private handleError<T>(operation = 'operation', result = {} as T) {
  
      return (error: HttpErrorResponse): Observable<T> => {
        console.error(`${operation} failed: ${error.message} : status:${error.status} `);
  
        return of(result);
      };
    }
  
  */

  /*
   getItems(): Observable<Item[] | any[]> {
  getItems2(): Observable<string[]> {
    let errorResponse: HttpErrorResponse;
    let init = {
      status: 1111,
    }
    errorResponse = new HttpErrorResponse(init);
    const url = this.backendUrl + '/continents1'
     const url = 'http://localhost:5111/continents';
    console.log('00000000001:service:getItems:' + url);
     let toto = { name: 1111 };

    let riri: HttpErrorResponse;
    let status: number;
    let item = {
      status: 1234
    }
    toto = new HttpErrorResponse.init(item);
    let riri = new HttpErrorResponse({ error: 'msg ahta', status: 777 });

    let toto: Array<any>;
    toto = ['1111', '2222', '3333', '4444'];

    const result = this.http.get<string[]>(url)
     const result = this.http.get<Item[]>(url)
      .pipe(
        catchError(this.handleError('getItems', errorResponse))
         catchError(of(toto))
        catchError(this.handleError2('getItems', toto))
      );

    return ['kkkk'];
  }

  private handleError2<T>(operation = 'operation', result = {} as T) {
    console.log('00000000002:service:getItems:' + JSON.stringify(result));
    return (error: HttpErrorResponse): Observable<T | HttpErrorResponse> => {
       console.log('00000000003:service:getItems:');
       console.error(`${operation} failed: ${error.message}`);
       console.log('00000000004:service:getItems:' + JSON.stringify(error));
      return of(result);
    };
  } */


}

