import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExerciceComponent } from './exercice.component';


@NgModule({
  declarations: [ExerciceComponent],
  imports: [
    CommonModule,
    FormsModule,
    ExerciceRoutingModule
  ],
  exports: [
    ExerciceComponent,
  ],
})
export class ExerciceModule { }
