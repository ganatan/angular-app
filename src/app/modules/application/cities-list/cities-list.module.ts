import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CitiesListComponent } from './cities-list.component';
import { CitiesListRoutingModule } from './cities-list-routing.module';

import { GridModule } from '../../../components/grid/grid.module';
import { PaginationModule } from '../../../components/pagination/pagination.module';
import { SearchBarModule } from '../../../components/search-bar/search-bar.module';
import { SearchResultModule } from '../../../components/search-result/search-result.module';

@NgModule({
  declarations: [
    CitiesListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CitiesListRoutingModule,
    GridModule,
    PaginationModule,
    SearchBarModule,
    SearchResultModule,
  ],
  exports: [
    CitiesListComponent
  ],
  providers: [
  ],
})
export class CitiesListModule { }
