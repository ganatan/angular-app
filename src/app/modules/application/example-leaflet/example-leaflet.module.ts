import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleLeafletRoutingModule } from './example-leaflet-routing.module';
import { ExampleLeafletComponent } from './example-leaflet.component';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [ExampleLeafletComponent],
  imports: [
    CommonModule,
    ExampleLeafletRoutingModule,
    LeafletModule.forRoot()
  ],
  exports: [
    ExampleLeafletComponent,
  ],
})
export class ExampleLeafletModule { }
