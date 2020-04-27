import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailingComponent } from './mailing.component';
import { MailingRoutingModule } from './mailing-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MailingRoutingModule
  ],
  exports: [
    MailingComponent
  ],
  declarations: [
    MailingComponent
  ],
  providers: [
  ],
})
export class MailingModule { }
