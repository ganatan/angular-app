import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialComponent } from './tutorial.component';

@NgModule({
  declarations: [
    TutorialComponent,
  ],
  imports: [
    CommonModule,
    TutorialRoutingModule
  ],
  exports: [
    TutorialComponent,
  ],
})
export class TutorialModule { }
