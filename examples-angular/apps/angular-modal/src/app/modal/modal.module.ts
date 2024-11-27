import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ModalComponent,
  ],
  declarations: [
    ModalComponent,
  ],
})
export class ModalModule { }
