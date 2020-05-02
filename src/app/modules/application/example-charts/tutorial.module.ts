import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialComponent } from './tutorial.component';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [TutorialComponent],
  imports: [
    CommonModule,
    TutorialRoutingModule,
    ChartsModule,
  ],
  exports: [
    TutorialComponent,
  ],
})
export class TutorialModule { }
