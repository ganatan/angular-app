import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MoviesFormRoutingModule } from './movies-form-routing.module';
import { MoviesFormComponent } from './movies-form.component';


@NgModule({
  declarations: [MoviesFormComponent],
  imports: [
    CommonModule,
    MoviesFormRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MoviesFormComponent
  ],
})
export class MoviesFormModule { }
