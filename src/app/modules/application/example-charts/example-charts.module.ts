import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleChartsRoutingModule } from './example-charts-routing.module';
import { ExampleChartsComponent } from './example-charts.component';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [ExampleChartsComponent],
  imports: [
    CommonModule,
    ExampleChartsRoutingModule,
    ChartsModule,
  ],
  exports: [
    ExampleChartsComponent,
  ],
})
export class ExampleChartsModule { }
