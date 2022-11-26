import { Inject, PLATFORM_ID, Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { timeout } from 'rxjs/operators';

import { ModalEbookService } from './modal-ebook.service';

import { Item } from './item';

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

@Component({
  selector: 'app-modal-ebook',
  templateUrl: './modal-ebook.component.html',
  styleUrls: ['./modal-ebook.component.css']
})

export class ModalEbookComponent {

  @Input() id: string;
  @Input() title: string;

  emailebook: string;
  nameebook: string;
  item = new Item();
  loading = false;
  emailerror = false;
  nameerror = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private http: HttpClient,
    private modalEbookService: ModalEbookService) {

    this.id = '';
    this.emailebook = '';
    this.nameebook = '';
    this.title = '';

  }

  close(action: any) {
    if (action) {
      this.emailerror = false;
      if ((this.emailebook === null) || (this.emailebook === undefined) || (this.emailebook === '')) {
        this.emailerror = true;
      }
      if (!this.emailerror) {
        this.loading = true;
        this.getSubscriptionTutorial(this.emailebook, this.modalEbookService.pageId, 'subscription-tutorial:' + 'valid')
          .subscribe(
            data => {
              if ((data === undefined) || (data === null)) {
                data = { id: 1, message: 'User created!' };
              }
              this.item.action = 'valid';
              this.item.emailebook = this.emailebook;
              this.item.data = data;
              this.modalEbookService.afterClosed(this.item);
              this.loading = false;
            });
      }
    } else {
      this.item.action = 'cancel';
      this.item.emailebook = this.emailebook;
      this.modalEbookService.afterClosed(this.item);
    }
  }

  getSubscriptionTutorial(email: any, pageId: any, pagename: any): Observable<any> {
    let url = '';
    url = url + 'subscription-tutorial';
    const body = JSON.stringify({ pageId: pageId, pagename: pagename, email: email });

    return this.http.post<any>(url, body, httpOptions).pipe(
      timeout(3000),
      catchError(this.handleError<any>('addItem'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

}
