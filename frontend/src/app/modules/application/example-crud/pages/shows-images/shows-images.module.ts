import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsImagesComponent } from './shows-images.component';
import { ShowsImagesRoutingModule } from './shows-images-routing.module';

import { GridImagesModule } from '../../components/grid-images/grid-images.module';
import { PaginationModule } from '../../components/pagination/pagination.module';
import { SearchBarModule } from '../../components/search-bar/search-bar.module';
import { SearchResultModule } from '../../components/search-result/search-result.module';

@NgModule({
  declarations: [
    ShowsImagesComponent,
  ],
  imports: [
    CommonModule,
    ShowsImagesRoutingModule,
    GridImagesModule,
    PaginationModule,
    SearchBarModule,
    SearchResultModule,
  ],
  exports: [
    ShowsImagesComponent
  ],
})
export class ShowsImagesModule { }
