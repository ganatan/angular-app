import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialComponent } from './tutorial.component';

import { PrettyJsonPipe } from './pretty-json.pipe';

@NgModule({
  declarations: [
    TutorialComponent,
    PrettyJsonPipe
  ],
  providers: [
  ],
  imports: [
    CommonModule,
    TutorialRoutingModule,
  ],
  exports: [
    TutorialComponent
  ],
})
export class TutorialModule { }

