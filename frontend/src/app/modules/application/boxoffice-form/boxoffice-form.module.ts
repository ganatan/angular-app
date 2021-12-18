import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BoxofficeFormRoutingModule } from './boxoffice-form-routing.module';
import { BoxofficeFormComponent } from './boxoffice-form.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BoxofficeFormComponent,
  ],
  providers: [
  ],
  imports: [
    CommonModule,
    BoxofficeFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    BoxofficeFormComponent
  ],
})
export class BoxofficeFormModule { }
