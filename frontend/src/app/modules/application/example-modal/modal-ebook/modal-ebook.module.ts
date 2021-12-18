import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ModalEbookComponent } from './modal-ebook.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ModalEbookComponent,
  ],
  declarations: [
    ModalEbookComponent,
    SafePipe,
  ],
})
export class ModalEbookModule { }
