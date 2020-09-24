import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsListComponent } from './shows-list.component';
import { ShowsListRoutingModule } from './shows-list-routing.module';

import { GridModule } from '../../components/grid/grid.module';
import { PaginationModule } from '../../components/pagination/pagination.module';
import { SearchBarModule } from '../../components/search-bar/search-bar.module';
import { SearchResultModule } from '../../components/search-result/search-result.module';

@NgModule({
  declarations: [
    ShowsListComponent,
  ],
  imports: [
    CommonModule,
    ShowsListRoutingModule,
    GridModule,
    GridModule,
    PaginationModule,
    SearchBarModule,
    SearchResultModule,
  ],
  exports: [
    ShowsListComponent
  ],
})
export class ShowsListModule { }
