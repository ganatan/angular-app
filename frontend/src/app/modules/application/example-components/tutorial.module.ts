import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialComponent } from './tutorial.component';
import { SmartphoneComponent } from './smartphone/smartphone.component';

@NgModule({
  declarations: [
    TutorialComponent,
    SmartphoneComponent
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
