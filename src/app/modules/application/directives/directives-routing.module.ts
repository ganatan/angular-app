import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectivesComponent } from './directives.component';

const routes: Routes = [
  { path: '', component: DirectivesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }