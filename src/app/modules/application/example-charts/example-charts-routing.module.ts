import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleChartsComponent } from './example-charts.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleChartsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleChartsRoutingModule { }
