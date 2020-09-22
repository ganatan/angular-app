import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExerciceComponent } from './exercice.component';

@NgModule({
  declarations: [ExerciceComponent],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    HttpClientModule
  ],
  exports: [ExerciceComponent],
})
export class ExerciceModule { }
