import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowsFormComponent } from './shows-form.component';

const routes: Routes = [
  { path: '', component: ShowsFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowsFormRoutingModule { }
