import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContinentsListComponent } from './continents-list.component';

const routes: Routes = [
  { path: '', component: ContinentsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContinentsListRoutingModule { }
