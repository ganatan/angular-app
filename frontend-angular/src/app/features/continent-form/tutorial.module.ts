import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TutorialComponent } from './tutorial.component';
import { TutorialRoutingModule } from './tutorial-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TutorialRoutingModule,
    FormsModule,
    ReactiveFormsModule,
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