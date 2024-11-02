import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';

import { PaginationService } from './utils/pagination/pagination.service';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule
  ],
  providers: [
    PaginationService
  ],
  exports: [
    HeaderModule,
    FooterModule
  ]
})
export class SharedModule { }
