import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TutorialComponent } from './tutorial.component';
import { TutorialRoutingModule } from './tutorial-routing.module';

import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);


@NgModule({
  imports: [
    CommonModule,
    TutorialRoutingModule,
    FormsModule,
  ],
  exports: [
    TutorialComponent
  ],
  declarations: [
    TutorialComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "fr-FR" },
  ],
})
export class TutorialModule { }