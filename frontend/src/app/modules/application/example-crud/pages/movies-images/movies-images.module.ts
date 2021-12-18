import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesImagesComponent } from './movies-images.component';
import { MoviesImagesRoutingModule } from './movies-images-routing.module';

import { GridImagesModule } from '../../components/grid-images/grid-images.module';
import { PaginationModule } from '../../components/pagination/pagination.module';
import { SearchBarModule } from '../../components/search-bar/search-bar.module';
import { SearchResultModule } from '../../components/search-result/search-result.module';

@NgModule({
  declarations: [
    MoviesImagesComponent,
  ],
  imports: [
    CommonModule,
    MoviesImagesRoutingModule,
    GridImagesModule,
    PaginationModule,
    SearchBarModule,
    SearchResultModule,
  ],
  exports: [
    MoviesImagesComponent
  ],
})
export class MoviesImagesModule { }
