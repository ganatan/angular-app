import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ExampleReactiveFormRoutingModule } from './example-reactive-form-routing.module';
import { ExampleReactiveFormComponent } from './example-reactive-form.component';
import { PrettyJsonPipe } from './pretty-json.pipe';

@NgModule({
  declarations: [
    ExampleReactiveFormComponent,
    PrettyJsonPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ExampleReactiveFormRoutingModule
  ],
  exports: [
    ExampleReactiveFormComponent,
  ],
})
export class ExampleReactiveFormModule { }
