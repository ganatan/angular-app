import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CsvViewerComponent } from './csv-viewer.component';

@NgModule({
  declarations: [
    CsvViewerComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    CsvViewerComponent
  ]
})
export class CsvViewerModule { }
