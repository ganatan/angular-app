import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ModalFormComponent } from './modal-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ModalFormComponent,
  ],
  declarations: [
    ModalFormComponent,
  ],
})
export class ModalFormModule { }
