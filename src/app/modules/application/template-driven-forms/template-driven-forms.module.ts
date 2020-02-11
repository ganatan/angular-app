import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDrivenFormsComponent } from './template-driven-forms.component';
import { TemplateDrivenFormsRoutingModule } from './template-driven-forms-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TemplateDrivenFormsRoutingModule,
    FormsModule
  ],
  exports: [
    TemplateDrivenFormsComponent
  ],
  declarations: [
    TemplateDrivenFormsComponent
  ],
  providers: [
  ],
})
export class TemplateDrivenFormsModule { }