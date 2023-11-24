import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciceComponent } from './exercice.component';

const routes: Routes = [
  {
    path: '',
    component: ExerciceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
