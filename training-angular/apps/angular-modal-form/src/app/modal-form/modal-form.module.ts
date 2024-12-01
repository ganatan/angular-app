import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ModalFormComponent } from './modal-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ModalFormComponent,
  ],
  declarations: [
    ModalFormComponent,
  ],
})
export class ModalFormModule { }
