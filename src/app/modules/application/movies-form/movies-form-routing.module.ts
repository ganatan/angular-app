import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesFormComponent } from './movies-form.component';

const routes: Routes = [
  { path: '', component: MoviesFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesFormRoutingModule { }
