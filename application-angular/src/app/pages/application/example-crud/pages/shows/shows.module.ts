import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsComponent } from './shows.component';
import { ShowsRoutingModule } from './shows-routing.module';

import { GridModule } from '../../components/grid/grid.module';
import { PaginationModule } from '../../components/pagination/pagination.module';
import { SearchBarModule } from '../../components/search-bar/search-bar.module';
import { SearchResultModule } from '../../components/search-result/search-result.module';

@NgModule({
  declarations: [
    ShowsComponent,
  ],
  imports: [
    CommonModule,
    ShowsRoutingModule,
    GridModule,
    GridModule,
    PaginationModule,
    SearchBarModule,
    SearchResultModule,
  ],
  exports: [
    ShowsComponent
  ],
})
export class ShowsModule { }
