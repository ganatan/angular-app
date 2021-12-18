import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialComponent } from './tutorial.component';
import { HttpClientModule } from '@angular/common/http';

import { ConfigService } from './services/config/config.service';

@NgModule({
  declarations: [
    TutorialComponent,
  ],
  imports: [
    CommonModule,
    TutorialRoutingModule,
    HttpClientModule,
  ],
  exports: [
    TutorialComponent,
  ],
  providers: [
    ConfigService,
  ],
})
export class TutorialModule { }
