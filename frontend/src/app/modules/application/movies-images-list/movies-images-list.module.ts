import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesImagesListComponent } from './movies-images-list.component';
import { MoviesImagesListRoutingModule } from './movies-images-list-routing.module';

import { ConfigService } from './config/config.service';
import { PageListComponent } from './page-list/page-list.component';

import { GridImagesModule } from './grid-images/grid-images.module';
import { PaginationModule } from './pagination/pagination.module';
import { SearchBarModule } from './search-bar/search-bar.module';
import { SearchResultModule } from './search-result/search-result.module';

@NgModule({
  declarations: [
    MoviesImagesListComponent,
    PageListComponent,
  ],
  imports: [
    CommonModule,
    MoviesImagesListRoutingModule,
    GridImagesModule,
    PaginationModule,
    SearchBarModule,
    SearchResultModule,
  ],
  providers: [
    ConfigService,
  ],
  exports: [
    MoviesImagesListComponent
  ],
})
export class MoviesImagesListModule { }
