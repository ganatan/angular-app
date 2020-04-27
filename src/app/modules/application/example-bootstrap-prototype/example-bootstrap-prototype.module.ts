import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleBootstrapPrototypeRoutingModule } from './example-bootstrap-prototype-routing.module';
import { ExampleBootstrapPrototypeComponent } from './example-bootstrap-prototype.component';

@NgModule({
  declarations: [
    ExampleBootstrapPrototypeComponent,
  ],
  exports: [
    ExampleBootstrapPrototypeComponent,
  ],
  imports: [
    CommonModule,
    ExampleBootstrapPrototypeRoutingModule
  ]
})
export class ExampleBootstrapPrototypeModule { }
