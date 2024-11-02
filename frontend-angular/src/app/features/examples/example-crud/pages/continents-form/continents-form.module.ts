import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContinentsFormRoutingModule } from './continents-form-routing.module';
import { ContinentsFormComponent } from './continents-form.component';

import { PageFormComponent } from '../../components/page-form/page-form.component';

@NgModule({
  declarations: [
    ContinentsFormComponent,
    PageFormComponent],
  imports: [
    CommonModule,
    ContinentsFormRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ContinentsFormComponent
  ],
})
export class ContinentsFormModule { }
