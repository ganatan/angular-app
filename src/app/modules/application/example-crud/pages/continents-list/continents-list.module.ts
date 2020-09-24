import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContinentsListComponent } from './continents-list.component';
import { ContinentsListRoutingModule } from './continents-list-routing.module';

import { GridModule } from '../../components/grid/grid.module';
import { PaginationModule } from '../../components/pagination/pagination.module';
import { SearchBarModule } from '../../components/search-bar/search-bar.module';
import { SearchResultModule } from '../../components/search-result/search-result.module';

@NgModule({
  declarations: [
    ContinentsListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContinentsListRoutingModule,
    GridModule,
    PaginationModule,
    SearchBarModule,
    SearchResultModule,
  ],
  exports: [
    ContinentsListComponent
  ],
  providers: [
  ],
})
export class ContinentsListModule { }
