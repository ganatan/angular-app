import { Pagination } from './pagination';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PaginationService {

  constructor() { }

  range(start: any, stop: any, step: any): any {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    if (!step) {
      step = stop < start ? -1 : 1;
    }
    const length = Math.max(Math.ceil((stop - start) / step), 0);
    const range = Array(length);
    for (let idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }
    
    return range;
  }

  getPagination(totalItems: number, currentPage: number = 1, perPage: number): any {
    const totalPages = Math.ceil(totalItems / perPage);
    let startPage: number;
    let endPage: number;
    const visiblePages = 7;

    if (currentPage < 1) {
      currentPage = 1;
    }
    if (currentPage > totalPages) {
      currentPage = 1;
    }
    if (totalPages <= visiblePages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= visiblePages) {
        startPage = 1;
        endPage = visiblePages;
      } else {
        if (currentPage + 1 >= totalPages) {
          startPage = totalPages - visiblePages + 1;
          endPage = totalPages;
          if (currentPage < startPage) {
            startPage = currentPage + 1;
            endPage = currentPage + 1;
          }
        } else {
          endPage = currentPage;
          startPage = endPage - visiblePages + 1;
        }
      }
    }

    const pages = this.range(startPage, endPage + 1, 1);
    let browser = false;
    if (totalPages > visiblePages) {
      browser = true;
    }

    const pagination = new Pagination();
    pagination.pages = pages;
    pagination.browser = browser;
    pagination.total = totalPages;
    pagination.current = currentPage;
    pagination.perPage = perPage;

    return pagination;

  }

}





