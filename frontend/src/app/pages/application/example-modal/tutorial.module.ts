import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialComponent } from './tutorial.component';

import { ModalEbookService } from './modal-ebook/modal-ebook.service';
import { ModalEbookModule } from './modal-ebook/modal-ebook.module';

@NgModule({
  declarations: [
    TutorialComponent,
  ],
  imports: [
    CommonModule,
    TutorialRoutingModule,
    ModalEbookModule    
  ],
  providers: [
    ModalEbookService
  ],
  exports: [
    TutorialComponent,
  ],
})
export class TutorialModule { }
