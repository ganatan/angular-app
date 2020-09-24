import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid.component';

@NgModule({
  declarations: [
    GridComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    GridRoutingModule
  ],
  exports: [
    GridComponent
  ],
})
export class GridModule { }
