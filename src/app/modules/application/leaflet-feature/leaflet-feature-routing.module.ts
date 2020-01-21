import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeafletFeatureComponent } from './leaflet-feature.component';

const routes: Routes = [
  { path: '', component: LeafletFeatureComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeafletFeatureRoutingModule { }
