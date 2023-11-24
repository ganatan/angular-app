import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountriesFormComponent } from './countries-form.component';

const routes: Routes = [
  { path: '', component: CountriesFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesFormRoutingModule { }
