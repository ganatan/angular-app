import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleServicesComponent } from './example-services.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleServicesComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleServicesRoutingModule { }
