import { Component, OnChanges, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { Pagination } from './pagination';
import { PaginationService } from './pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {


  @Input() count: any;
  @Input() page: any;
  @Input() perPage: any;

  @Output() changePage = new EventEmitter<number>();

  pagination = new Pagination();

  constructor(
    private paginationService: PaginationService,
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.pagination.count = this.count;
    this.pagination.perPage = this.perPage;
    this.pagination.page = this.page;
    this.pagination = this.paginationService.getPagination(
      this.pagination.count,
      this.pagination.page,
      this.pagination.perPage);
  }

  selectPage(page: number): void {
    this.changePage.emit(page);
  }

}

