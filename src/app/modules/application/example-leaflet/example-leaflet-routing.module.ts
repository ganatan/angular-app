import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleLeafletComponent } from './example-leaflet.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleLeafletComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleLeafletRoutingModule { }
