import { Inject, PLATFORM_ID, Component, AfterViewInit, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
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

export class ModalEbookComponent implements AfterViewInit {

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
//              $('#modalEbook').modal('hide');
              this.item.action = 'valid';
              this.item.emailebook = this.emailebook;
              this.item.data = data;
              this.modalEbookService.afterClosed(this.item);
              this.loading = false;
            });
      }
    } else {
//      $('#modalEbook').modal('hide');
      this.item.action = 'cancel';
      this.item.emailebook = this.emailebook;
      this.modalEbookService.afterClosed(this.item);
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
/*      $('#modalEbook').on('show.bs.modal', function (this: any, $event: any) {
      }, ($event: any) => {
        this.onLoad(event);
      }); */
    }
  }

  onLoad(event: any) {
    this.loading = false;
  }

  getSubscriptionTutorial(email: any, pageId: any, pagename: any): Observable<any> {
    let url = '';
    // let url = this.configService.getConfig().getUrl();
    url = url + 'subscription-tutorial';
    const body = JSON.stringify({ pageId: pageId, pagename: pagename, email: email });

    return this.http.post<any>(url, body, httpOptions).pipe(
      timeout(3000),
      tap((itemData: any) => this.log(`added item w/ id=${9999}`)),
      catchError(this.handleError<any>('addItem'))
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
