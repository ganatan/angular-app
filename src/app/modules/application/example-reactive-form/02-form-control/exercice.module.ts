import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExerciceComponent } from './exercice.component';

@NgModule({
  declarations: [
    ExerciceComponent,
  ],
  providers: [
  ],
  imports: [
    ExerciceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ExerciceComponent
  ],
})
export class ExerciceModule { }
