import { Injectable } from "@angular/core";
import { Pagination } from './pagination';

@Injectable()
export class PaginationService {

  private readonly MAX_PAGES_DISPLAYED = 7;
  private readonly STARTING_PAGE = 1;

  range(start: number, end: number): number[] {
    const length = end - start;
    
    return Array.from({ length }, (__, index) => start + index);
  }

  getPagination(pagination: Pagination): Pagination {
    const { totalItems, perPage } = pagination;
    let currentPage = pagination.currentPage;
    const totalPages = Math.ceil(totalItems / perPage);

    if (currentPage > totalPages) {
      currentPage = this.STARTING_PAGE;
    }

    const { startPage, endPage } = this.calculatePageRange(currentPage, totalPages);

    const pages = this.range(startPage, endPage + 1);

    return {
      totalItems,
      currentPage,
      perPage,
      totalPages,
      startPage,
      endPage,
      pages,
      pageBrowser: totalPages > 0,
      useful: totalPages > 1
    };
  }

  private calculatePageRange(currentPage: number, totalPages: number): { startPage: number, endPage: number } {
    if (totalPages <= this.MAX_PAGES_DISPLAYED) {
      return { startPage: this.STARTING_PAGE, endPage: totalPages };
    }

    if (currentPage <= this.MAX_PAGES_DISPLAYED - 1) {
      return { startPage: this.STARTING_PAGE, endPage: this.MAX_PAGES_DISPLAYED };
    }

    if (currentPage + 4 >= totalPages) {
      return { startPage: totalPages - (this.MAX_PAGES_DISPLAYED - 1), endPage: totalPages };
    }

    return { startPage: currentPage - 2, endPage: currentPage + 4 };
  }

  initializePagination(perPage: number): Pagination {
    return {
      totalItems: 0,
      currentPage: this.STARTING_PAGE,
      perPage,
      totalPages: 0,
      startPage: this.STARTING_PAGE,
      endPage: this.STARTING_PAGE,
      pages: [],
      pageBrowser: false,
      useful: false
    };
  }
}

