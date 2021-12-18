import { Component, Injector } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ConfigService } from '../../services/config/config.service';
import { ItemsService } from '../../services/items/items.service';

import { Params } from './params';

@Component({
  selector: 'app-page-list',
  template: ``,
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {

  api: any;
  url: any;
  endpoint: any;
  items: any;
  icon: any;
  columns: any;
  link: any;
  filter = '';
  itemsPerPageDefault = 5;

  placeholder: any;
  results: any;
  creation: any;
  found: any;
  linkRoute: any;
  searchField = '';

  loaded: any;
  query: string;
  params = new Params();

  itemsCount = 0;
  itemsPage = 1;
  itemsPerPage = 4;

  public route: ActivatedRoute;
  public router: Router;
  public configService: ConfigService;
  public itemsService: ItemsService;

  constructor(injector: Injector) {
    this.query = '';
    this.route = injector.get(ActivatedRoute);
    this.router = injector.get(Router);
    this.configService = injector.get(ConfigService);
    this.itemsService = injector.get(ItemsService);

    this.initialize();

  }

  initialize(): void {
    this.api = this.configService.config.api;
    this.url = this.configService.config.url + this.endpoint;
    this.readQueryParams();
  }

  readQueryParams(): void {
    this.route.queryParams
      .subscribe(params => {
        this.params.q = params['q'];
        if (params['page'] !== undefined) {
          this.params.page = params['page'];
          this.itemsPage = parseInt(this.params.page, 10);
        }
        this.searchField = this.params.q;
        this.getItems();
      });
  }

  getItems(): void {
    this.loaded = false;
    this.query = this.searchField;
    if (this.endpoint !== undefined) {
      this.itemsService.getItemsCount(this.api, this.url, this.query)
        .subscribe(item => {
          this.itemsCount = item.count;
          if (this.itemsPerPage < 1) {
            this.itemsPerPage = this.itemsPerPageDefault;
          }
          const page = this.itemsPage;
          const totalPages = Math.ceil(this.itemsCount / this.itemsPerPage);
          if (page >= totalPages) {
            this.itemsPage = totalPages;
          }
          this.itemsService.getItems(
            this.api, this.url, this.itemsPerPage, this.itemsPage, this.query)
            .subscribe(items => {
              this.items = items;
              this.loaded = true;
            });
        });
    }
  }

  writeQueryParams(search?: boolean): void {
    let query = this.searchField;
    if ((query === '') || (query === undefined)) {
      query = '';
    }
    const url = '/' + this.linkRoute;
    let page = '';
    if (this.itemsPage > 1) {
      page = this.itemsPage.toString();
    }
    this.params.q = query;
    this.params.page = page;
    this.router.navigate(['crud/' + url], { queryParams: this.params });
  }


  search(): void {
    this.query = this.searchField;
    this.writeQueryParams();
    this.getItems();
  }

  changePage(page: number): void {
    this.itemsPage = page;
    this.writeQueryParams();
    this.getItems();
  }

  selectItem(id: any): void {
    this.router.navigate(['/crud/' + this.link, id]);
  }

  onChangePage(page: any): void {
    this.changePage(page);
  }

  onSearch(query: any): void {
    this.searchField = query;
    this.search();
  }

}

