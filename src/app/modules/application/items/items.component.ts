import { Component, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';

import { ItemsService } from './items.service';

const STATE_KEY_ITEMS = makeStateKey('items');

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  //  items: any;
  items: any = [];
  loaded: boolean;
  constructor(
    private state: TransferState,
    private itemsService: ItemsService,
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(APP_ID) private appId: string) {

  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.loaded = false;

    this.items = this.state.get(STATE_KEY_ITEMS, <any> []);

    if (this.items.length === 0) {
      this.itemsService.getItems('https://jsonplaceholder.typicode.com/users')
        .subscribe(
          items => {
            const platform = isPlatformBrowser(this.platformId) ?
              'in the browser' : 'on the server';
            console.log(`getUsers : Running ${platform} with appId=${this.appId}`);
            this.items = items;
            this.loaded = true;
            this.state.set(STATE_KEY_ITEMS, <any> items);
          });
    } else {
      this.loaded = true;
    }
  }

  resetUsers() {
    this.items = null;
    this.loaded = true;
  }

}