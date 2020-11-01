import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountriesListComponent } from './countries-list.component';

const routes: Routes = [
  { path: '', component: CountriesListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesListRoutingModule { }
