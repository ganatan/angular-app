import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleComponentsRoutingModule } from './example-components-routing.module';
import { ExampleComponentsComponent } from './example-components.component';
import { SmartphoneComponent } from './smartphone/smartphone.component';

@NgModule({
  declarations: [
    ExampleComponentsComponent,
    SmartphoneComponent
  ],
  imports: [
    CommonModule,
    ExampleComponentsRoutingModule
  ],
  exports: [
    ExampleComponentsComponent,
  ],
})
export class ExampleComponentsModule { }
