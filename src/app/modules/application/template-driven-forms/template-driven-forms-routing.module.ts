import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateDrivenFormsComponent } from './template-driven-forms.component';

const routes: Routes = [
  { path: '', component: TemplateDrivenFormsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateDrivenFormsRoutingModule { }