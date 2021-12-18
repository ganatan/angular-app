import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsFormComponent } from './news-form.component';

const routes: Routes = [
  { path: '', component: NewsFormComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
