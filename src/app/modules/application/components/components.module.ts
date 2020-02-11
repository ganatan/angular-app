import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsComponent } from './components.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { SmartphoneComponent } from './smartphone/smartphone.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports: [
    ComponentsComponent
  ],
  declarations: [
    ComponentsComponent,
    SmartphoneComponent
  ],
  providers: [
  ],
})
export class ComponentsModule { }