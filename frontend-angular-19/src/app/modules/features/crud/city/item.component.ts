import { Component, OnInit, inject } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DEFAULT_ITEMS_PER_PAGE } from '../../../../shared/constants/pagination.constants';
import { PaginationService } from '../../../../shared/services/pagination/pagination.service';
import { Pagination } from '../../../../shared/services/pagination/pagination';
import { SortDirection } from '../../../../shared/constants/sort.constants';

import { ITEM_CONSTANTS } from './services/item.constants';
import { Item } from './services/item.model';
import { Filters } from './services/filters.model';
import { ITEMS_SERVICE } from './services/items.token';
import { ItemsProvider } from './services/items.provider';

declare const bootstrap: any;

@Component({
  selector: 'app-item',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    PaginationService,
    ItemsProvider,
  ],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  private itemsService = inject(ITEMS_SERVICE);
  private paginationService = inject(PaginationService);

  isFiltersOpen = false;
  name_default = ITEM_CONSTANTS.ROUTE_PATH;
  defaultSelectedPerPage = DEFAULT_ITEMS_PER_PAGE;
  sortColumn: string | null = null;
  sortField: string | null = null;
  sortDirection: SortDirection.ASC | SortDirection.DESC | null = null;

  items: Item[] | undefined;
  loading = false;

  totals = {
    count: 0,
    countAll: 0,
  };

  filters: Filters = {
    page: null,
    size: null,
    name: null,
  };

  selectedPerPage: number;
  paginationEnabled = true;
  pagination: Pagination;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object,
    private route: ActivatedRoute,
    private router: Router) {

    this.sortColumn = 'name';
    this.sortDirection = SortDirection.ASC;
    this.selectedPerPage = this.defaultSelectedPerPage;
    this.pagination = this.paginationService.initializePagination(this.selectedPerPage);
  }

  ngOnInit(): void {
    this.getQueryParams();
  }

  getItems(filters: any): void {
    const sort = this.sortColumn ? (this.sortDirection === SortDirection.ASC ? this.sortColumn : `-${this.sortColumn}`) : null;
    const sortFilters = {
      ...filters,
      sort,
    };
    this.loading = true;
    this.itemsService.getItems(sortFilters)
      .subscribe(response => {
        const count = response.metadata.pagination.totalItems;
        this.pagination.totalItems = count;
        this.items = response.data;
        this.setTotals(response);
        this.loading = false;
        this.updatePagination();
      });
  }

  setTotals(response: any): void {
    this.totals = {
      count: response.metadata.pagination.perPage,
      countAll: response.metadata.pagination.totalItems,
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
    const url = ITEM_CONSTANTS.RESOURCE_NAME;
    this.router.navigate([url], { queryParams });
  }

  search() {
    const filters = {
      ...this.filters,
      page: this.pagination.currentPage,
      size: this.pagination.perPage
    };
    const sort = this.sortColumn ? (this.sortDirection === SortDirection.ASC ? this.sortColumn : `-${this.sortColumn}`) : null;
    const sortFilters = {
      ...filters,
      sort,
    };
    this.setQueryParams(sortFilters);
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.search();
    }
  }

  getQueryParams() {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.filters = { ...this.filters, ...queryParams };
      const { size, sort } = this.filters || {};
      if (size) {
        this.selectedPerPage = size;
      }
      if (sort) {
        if (sort.startsWith('-')) {
          this.sortColumn = sort.substring(1);
          this.sortDirection = SortDirection.DESC;
        } else {
          this.sortColumn = sort;
          this.sortDirection = SortDirection.ASC;
        }
      }
      this.pagination = this.paginationService.initializePagination(this.selectedPerPage);
      this.getItems(this.filters);
    });
  }

  updatePagination() {
    this.pagination.currentPage = Number(this.filters.page) || 1;
    this.pagination.perPage = this.filters.size || this.selectedPerPage;
    this.setPagination();
  }

  createItem() {
    this.router.navigate([ITEM_CONSTANTS.RESOURCE_NAME, 0]);
  }

  selectItem(item: any) {
    this.router.navigate([ITEM_CONSTANTS.RESOURCE_NAME, item.id]);
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

  changePerPage(event: string) {
    const perPage = parseInt(event, 10);
    this.pagination.perPage = perPage;
    this.search();
  }

  getGlobalPosition(index: number): number {
    const offset = (this.pagination.currentPage - 1) * this.pagination.perPage;

    return offset + index + 1;
  }

  setSort(column: string, field?: string): void {
    if (this.sortColumn === column) {
      if (this.sortDirection === SortDirection.ASC) {
        this.sortDirection = SortDirection.DESC;
      } else if (this.sortDirection === SortDirection.DESC) {
        this.sortDirection = null;
        this.sortColumn = null;
        this.sortField = null;
      } else {
        this.sortDirection = SortDirection.ASC;
      }
    } else {
      this.sortColumn = column;
      this.sortField = field ? field : column;
      this.sortDirection = SortDirection.ASC;
    }
    this.search();
  }

  toggleFilters() {
    if (isPlatformBrowser(this.platformId)) {
      this.isFiltersOpen = !this.isFiltersOpen;
      const collapseElement = this.document.getElementById('collapseFilters');
      if (collapseElement) {
        const collapseInstance = new bootstrap.Collapse(collapseElement, {
          toggle: false
        });
        if (this.isFiltersOpen) {
          collapseInstance.show();
        } else {
          collapseInstance.hide();
        }
      }
    }
  }

}
