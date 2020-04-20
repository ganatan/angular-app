import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleComponentsComponent } from './example-components.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleComponentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleComponentsRoutingModule { }
