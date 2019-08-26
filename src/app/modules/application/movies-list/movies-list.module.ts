import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesListComponent } from './movies-list.component';
import { MoviesListRoutingModule } from './movies-list-routing.module';

import { GridModule } from '../../../components/grid/grid.module';
import { PaginationModule } from '../../../components/pagination/pagination.module';
import { SearchBarModule } from '../../../components/search-bar/search-bar.module';
import { SearchResultModule } from '../../../components/search-result/search-result.module';

@NgModule({
  declarations: [
    MoviesListComponent,
  ],
  imports: [
    CommonModule,
    MoviesListRoutingModule,
    GridModule,
    PaginationModule,
    SearchBarModule,
    SearchResultModule,
  ],
  exports: [
    MoviesListComponent
  ],
})
export class MoviesListModule { }
