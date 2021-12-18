import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContinentsFormComponent } from './continents-form.component';

const routes: Routes = [
  { path: '', component: ContinentsFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContinentsFormRoutingModule { }
