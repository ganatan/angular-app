import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleTemplateDrivenFormsComponent } from './example-template-driven-forms.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleTemplateDrivenFormsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleTemplateDrivenFormsRoutingModule { }
