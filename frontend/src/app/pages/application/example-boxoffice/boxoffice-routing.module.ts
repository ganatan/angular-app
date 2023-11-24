import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoxofficeComponent } from './boxoffice.component';

const routes: Routes = [
  { path: '', component: BoxofficeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoxofficeRoutingModule { }