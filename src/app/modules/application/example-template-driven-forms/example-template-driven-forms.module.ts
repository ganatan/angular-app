import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExampleTemplateDrivenFormsRoutingModule } from './example-template-driven-forms-routing.module';
import { ExampleTemplateDrivenFormsComponent } from './example-template-driven-forms.component';


@NgModule({
  declarations: [ExampleTemplateDrivenFormsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ExampleTemplateDrivenFormsRoutingModule
  ],
  exports: [
    ExampleTemplateDrivenFormsComponent,
  ],
})
export class ExampleTemplateDrivenFormsModule { }
