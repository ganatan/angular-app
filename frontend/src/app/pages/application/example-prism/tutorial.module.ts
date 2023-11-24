import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialComponent } from './tutorial.component';

import { PrismModule } from './prism/prism.module';

@NgModule({
  declarations: [
    TutorialComponent,
  ],
  imports: [
    CommonModule,
    TutorialRoutingModule,
    PrismModule,
  ],
  providers: [
  ],
  exports: [
    TutorialComponent,
  ],
})
export class TutorialModule { }
