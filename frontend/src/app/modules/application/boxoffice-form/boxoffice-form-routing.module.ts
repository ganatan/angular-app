import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxofficeFormComponent } from './boxoffice-form.component';

const routes: Routes = [
  { path: '', component: BoxofficeFormComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoxofficeFormRoutingModule { }
