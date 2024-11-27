import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialComponent } from './tutorial.component';
import { TutorialRoutingModule } from './tutorial-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TutorialRoutingModule,
  ],
  exports: [
    TutorialComponent
  ],
  declarations: [
    TutorialComponent
  ],
  providers: [
  ],
})
export class TutorialModule { }