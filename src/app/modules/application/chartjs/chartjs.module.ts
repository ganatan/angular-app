import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartjsComponent } from './chartjs.component';
import { ChartjsRoutingModule } from './chartjs-routing.module';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    ChartjsRoutingModule,
    ChartsModule,
  ],
  exports: [
    ChartjsComponent
  ],
  declarations: [
    ChartjsComponent
  ],
  providers: [
  ],
})
export class ChartjsModule { }