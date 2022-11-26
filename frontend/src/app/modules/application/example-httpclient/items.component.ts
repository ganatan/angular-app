import { Component, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';

import { ItemsService } from './items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  // eslint-disable-next-line
  items: any;
  loaded: boolean;
  constructor(
    private itemsService: ItemsService,

    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(APP_ID) private appId: string) {

    this.loaded = false;
  }


  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.itemsService.getItems('https://jsonplaceholder.typicode.com/users')
      .subscribe(
        items => {
          const platform = isPlatformBrowser(this.platformId) ? 'in the browser' : 'on the server';
          console.log(`getUsers : Running ${platform} with appId=${this.appId}`);
          this.loaded = true;
          this.items = items;
        });
  }

  resetUsers(): void {
    this.items = null;
    this.loaded = true;
  }

}