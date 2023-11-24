import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';

import { GridModule } from '../../components/grid/grid.module';
import { PaginationModule } from '../../components/pagination/pagination.module';
import { SearchBarModule } from '../../components/search-bar/search-bar.module';
import { SearchResultModule } from '../../components/search-result/search-result.module';

@NgModule({
  declarations: [
    MoviesComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    GridModule,
    PaginationModule,
    SearchBarModule,
    SearchResultModule,
  ],
  exports: [
    MoviesComponent
  ],
})
export class MoviesModule { }
