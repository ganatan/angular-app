import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesImagesListComponent } from './movies-images-list.component';
import { MoviesImagesListRoutingModule } from './movies-images-list-routing.module';

import { GridImagesModule } from '../../components/grid-images/grid-images.module';
import { PaginationModule } from '../../components/pagination/pagination.module';
import { SearchBarModule } from '../../components/search-bar/search-bar.module';
import { SearchResultModule } from '../../components/search-result/search-result.module';

@NgModule({
  declarations: [
    MoviesImagesListComponent,
  ],
  imports: [
    CommonModule,
    MoviesImagesListRoutingModule,
    GridImagesModule,
    PaginationModule,
    SearchBarModule,
    SearchResultModule,
  ],
  exports: [
    MoviesImagesListComponent
  ],
})
export class MoviesImagesListModule { }
