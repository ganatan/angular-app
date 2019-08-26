import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitiesListComponent } from './cities-list.component';

const routes: Routes = [
  { path: '', component: CitiesListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitiesListRoutingModule { }
