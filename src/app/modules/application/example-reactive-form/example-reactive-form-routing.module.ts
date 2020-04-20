import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleReactiveFormComponent } from './example-reactive-form.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleReactiveFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleReactiveFormRoutingModule { }
