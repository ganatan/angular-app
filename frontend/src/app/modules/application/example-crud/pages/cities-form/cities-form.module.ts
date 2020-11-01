import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CitiesFormRoutingModule } from './cities-form-routing.module';
import { CitiesFormComponent } from './cities-form.component';

@NgModule({
  declarations: [CitiesFormComponent],
  imports: [
    CommonModule,
    CitiesFormRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CitiesFormComponent
  ],
})
export class CitiesFormModule { }
