import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleBootstrapComponentsRoutingModule } from './example-bootstrap-components-routing.module';
import { ExampleBootstrapComponentsComponent } from './example-bootstrap-components.component';

@NgModule({
  declarations: [
    ExampleBootstrapComponentsComponent,
  ],
  exports: [
    ExampleBootstrapComponentsComponent,
  ],
  imports: [
    CommonModule,
    ExampleBootstrapComponentsRoutingModule
  ]
})
export class ExampleBootstrapComponentsModule { }
