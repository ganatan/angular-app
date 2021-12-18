import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchBarRoutingModule } from './search-bar-routing.module';
import { SearchBarComponent } from './search-bar.component';


@NgModule({
  declarations: [
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    SearchBarRoutingModule,
    FormsModule,
  ],
  exports: [
    SearchBarComponent
  ],
})
export class SearchBarModule { }
