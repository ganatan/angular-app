import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExerciceComponent } from './exercice.component';

import { ItemService } from './item.service';

@NgModule({
  declarations: [ExerciceComponent],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
  ],
  exports: [ExerciceComponent],
  providers: [ItemService]
})
export class ExerciceModule { }
