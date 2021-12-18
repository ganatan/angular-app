import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContinentsComponent } from './continents.component';
import { ContinentsRoutingModule } from './continents-routing.module';

import { GridModule } from '../../components/grid/grid.module';
import { PaginationModule } from '../../components/pagination/pagination.module';
import { SearchBarModule } from '../../components/search-bar/search-bar.module';
import { SearchResultModule } from '../../components/search-result/search-result.module';

@NgModule({
  declarations: [
    ContinentsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContinentsRoutingModule,
    GridModule,
    PaginationModule,
    SearchBarModule,
    SearchResultModule,
  ],
  exports: [
    ContinentsComponent
  ],
  providers: [
  ],
})
export class ContinentsModule { }
