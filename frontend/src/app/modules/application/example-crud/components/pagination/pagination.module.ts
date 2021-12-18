import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationRoutingModule } from './pagination-routing.module';
import { PaginationComponent } from './pagination.component';

@NgModule({
  declarations: [
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    PaginationRoutingModule
  ],
  exports: [
    PaginationComponent,
  ],
})
export class PaginationModule { }
