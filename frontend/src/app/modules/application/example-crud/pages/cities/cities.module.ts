import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CitiesComponent } from './cities.component';
import { CitiesRoutingModule } from './cities-routing.module';

import { GridModule } from '../../components/grid/grid.module';
import { PaginationModule } from '../../components/pagination/pagination.module';
import { SearchBarModule } from '../../components/search-bar/search-bar.module';
import { SearchResultModule } from '../../components/search-result/search-result.module';

@NgModule({
  declarations: [
    CitiesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CitiesRoutingModule,
    GridModule,
    PaginationModule,
    SearchBarModule,
    SearchResultModule,
  ],
  exports: [
    CitiesComponent
  ],
  providers: [
  ],
})
export class CitiesModule { }
