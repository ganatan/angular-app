import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ItemsService } from './services/items.service';
import { Item } from './services/item';

import { PaginationService } from '../../../shared/services/pagination/pagination.service';
import { Pagination } from '../../../shared/services/pagination/pagination';

import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);


@Component({
  selector: 'app-item',
  imports:[
    CommonModule,
    FormsModule,
  ],
  providers: [
    PaginationService,
    { provide: LOCALE_ID, useValue: "fr-FR" },
  ],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  defaultSelectedItemsPerPage = 10;
  sortColumn: string | null = null;
  sortDirection: 'asc' | 'desc' | null = null;

  items: Item[] | undefined;
  loading = false;

  totals = {
    count: 0,
    area: 0,
    population: 0,
    countriesNumber: 0,
    density: 0,
    countAll: 0,
    areaAll: 0,
    populationAll: 0,
    countriesNumberAll: 0,
    densityAll: 0
  };

  filters = {
    page: null,
    limit: null,
    name: null,
    code: null,
    areaMin: null,
    areaMax: null,
    populationMin: null,
    populationMax: null,
    countriesNumberMin: null,
    countriesNumberMax: null,
    densityMin: null,
    densityMax: null,
  };

  selectedItemsPerPage: number;
  paginationEnabled = true;
  pagination: Pagination;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private itemsService: ItemsService,
    private paginationService: PaginationService) {

    this.selectedItemsPerPage = this.defaultSelectedItemsPerPage;
    this.pagination = this.paginationService.initializePagination(this.selectedItemsPerPage);
  }

  ngOnInit(): void {
    this.getQueryParams();
  }

  getItems(filters: any): void {
    const sort = this.sortColumn ? (this.sortDirection === 'asc' ? this.sortColumn : `-${this.sortColumn}`) : null;
    const sortFilters = {
      ...filters,
      sort,
    };
    this.loading = true;
    this.itemsService.getItems(sortFilters)
      .subscribe(response => {
        const count = response.allTotals.count;
        this.pagination.totalItems = count;
        this.items = response.continents;
        this.setTotals(response);
        this.loading = false;
        this.updatePagination();
      });
  }

  setTotals(response: any): void {
    this.totals = {
      count: response.paginationTotals.count,
      area: response.paginationTotals.area,
      population: response.paginationTotals.population,
      countriesNumber: response.paginationTotals.countriesNumber,
      density: response.paginationTotals.density,
      countAll: response.allTotals.count,
      areaAll: response.allTotals.area,
      populationAll: response.allTotals.population,
      countriesNumberAll: response.allTotals.countriesNumber,
      densityAll: response.allTotals.density
    };
  }

  setQueryParams(filters: any) {
    const sanitizedFilters = { ...filters };
    if (sanitizedFilters.name === "") {
      sanitizedFilters.name = null;
    }
    if (sanitizedFilters.code === "") {
      sanitizedFilters.code = null;
    }
    if (sanitizedFilters.sort === "") {
      sanitizedFilters.sort = null;
    }
    const queryParams = { ...this.filters, ...sanitizedFilters };
    const url = '/continents';
    this.router.navigate([url], { queryParams });
  }

  search() {
    const filters = {
      ...this.filters,
      page: this.pagination.currentPage,
      limit: this.pagination.itemsPerPage
    };
    const sort = this.sortColumn ? (this.sortDirection === 'asc' ? this.sortColumn : `-${this.sortColumn}`) : null;
    const sortFilters = {
      ...filters,
      sort,
    };
    this.setQueryParams(sortFilters);
    this.getItems(this.filters);
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.search();
    }
  }

  getQueryParams() {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.filters = { ...this.filters, ...queryParams };
    
      const { limit } = this.filters || {};
      if (limit) {
        this.selectedItemsPerPage = limit;
      }
      
      this.pagination = this.paginationService.initializePagination(this.selectedItemsPerPage);
      this.getItems(this.filters);
    });
  }

  updatePagination() {
    this.pagination.currentPage = Number(this.filters.page) || 1;
    this.pagination.itemsPerPage = this.filters.limit || this.selectedItemsPerPage;
    this.setPagination();
  }

  create() {
    this.router.navigate(['/continents', 0]);
  }

  selectItem(item: Item) {
    this.router.navigate(['/continents', item.id]);
  }

  selectPagination() {
    this.paginationEnabled = !this.paginationEnabled;
  }

  setPagination() {
    this.pagination = this.paginationService.getPagination(this.pagination);
  }

  changePage(page: number) {
    this.pagination.currentPage = page;
    this.search();
  }

  changeItemsPerPage(event: string) {
    const itemsPerPage = parseInt(event, 10);
    this.pagination.itemsPerPage = itemsPerPage;
    this.search();
  }

  getGlobalPosition(index: number): number {
    const offset = (this.pagination.currentPage - 1) * this.pagination.itemsPerPage;

    return offset + index + 1;
  }

  setSort(column: string): void {
    if (this.sortColumn === column) {
      if (this.sortDirection === 'asc') {
        this.sortDirection = 'desc';
      } else if (this.sortDirection === 'desc') {
        this.sortDirection = null;
        this.sortColumn = null;
      } else {
        this.sortDirection = 'asc';
      }
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.search();
  }

}
