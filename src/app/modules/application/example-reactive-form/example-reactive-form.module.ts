import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleReactiveFormRoutingModule } from './example-reactive-form-routing.module';
import { ExampleReactiveFormComponent } from './example-reactive-form.component';

@NgModule({
  declarations: [
    ExampleReactiveFormComponent,
  ],
  imports: [
    CommonModule,
    ExampleReactiveFormRoutingModule,
  ],
  exports: [
    ExampleReactiveFormComponent,
  ],
})
export class ExampleReactiveFormModule { }
