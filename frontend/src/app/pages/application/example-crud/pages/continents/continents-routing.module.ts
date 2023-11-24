import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContinentsComponent } from './continents.component';

const routes: Routes = [
  { path: '', component: ContinentsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContinentsRoutingModule { }
