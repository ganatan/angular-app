import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitiesFormComponent } from './cities-form.component';

const routes: Routes = [
  { path: '', component: CitiesFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitiesFormRoutingModule { }
