import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialComponent } from './tutorial.component';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [TutorialComponent],
  imports: [
    CommonModule,
    TutorialRoutingModule,
    LeafletModule.forRoot()
  ],
  exports: [
    TutorialComponent,
  ],
})
export class TutorialModule { }
