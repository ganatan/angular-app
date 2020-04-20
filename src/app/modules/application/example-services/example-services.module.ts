import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleServicesRoutingModule } from './example-services-routing.module';
import { ExampleServicesComponent } from './example-services.component';

import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    ExampleServicesComponent,
    SafePipe,
  ],
  imports: [
    CommonModule,
    ExampleServicesRoutingModule
  ],
  exports: [
    ExampleServicesComponent,
  ],
})
export class ExampleServicesModule { }
