import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ShowsFormRoutingModule } from './shows-form-routing.module';
import { ShowsFormComponent } from './shows-form.component';


@NgModule({
  declarations: [ShowsFormComponent],
  imports: [
    CommonModule,
    ShowsFormRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ShowsFormComponent
  ],
})
export class ShowsFormModule { }
