import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {
  }

  getItem(url: string): Observable<any> {
    return this.http.get(url);
  }

  getItems(url: string): Observable<any> {
    return this.http.get(url);
  }

}

export class Item {
  id: string;
  name: string;
  date: string;
  director: string;
}

