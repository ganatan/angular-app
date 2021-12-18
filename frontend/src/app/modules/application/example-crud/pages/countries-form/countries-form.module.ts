import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CountriesFormRoutingModule } from './countries-form-routing.module';
import { CountriesFormComponent } from './countries-form.component';


@NgModule({
  declarations: [CountriesFormComponent],
  imports: [
    CommonModule,
    CountriesFormRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CountriesFormComponent
  ],
})
export class CountriesFormModule { }
