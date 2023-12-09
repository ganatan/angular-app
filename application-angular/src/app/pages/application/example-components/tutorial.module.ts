import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialComponent } from './tutorial.component';
import { ChannelComponent } from './channel/channel.component';

@NgModule({
  declarations: [
    TutorialComponent,
    ChannelComponent
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
