import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsImagesListComponent } from './shows-images-list.component';
import { ShowsImagesListRoutingModule } from './shows-images-list-routing.module';

import { GridImagesModule } from '../../../components/grid-images/grid-images.module';
import { PaginationModule } from '../../../components/pagination/pagination.module';
import { SearchBarModule } from '../../../components/search-bar/search-bar.module';
import { SearchResultModule } from '../../../components/search-result/search-result.module';

@NgModule({
  declarations: [
    ShowsImagesListComponent,
  ],
  imports: [
    CommonModule,
    ShowsImagesListRoutingModule,
    GridImagesModule,
    PaginationModule,
    SearchBarModule,
    SearchResultModule,
  ],
  exports: [
    ShowsImagesListComponent
  ],
})
export class ShowsImagesListModule { }
