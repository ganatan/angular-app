import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExerciceComponent } from './exercice.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PrettyJsonPipe } from './pretty-json.pipe';

@NgModule({
  declarations: [
    ExerciceComponent,
    PrettyJsonPipe
  ],
  providers: [
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ExerciceComponent
  ],
})
export class ExerciceModule { }
