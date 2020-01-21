import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeafletFeatureComponent } from './leaflet-feature.component';
import { LeafletFeatureRoutingModule } from './leaflet-feature-routing.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  imports: [
    CommonModule,
    LeafletFeatureRoutingModule,
    LeafletModule.forRoot()
  ],
  exports: [
    LeafletFeatureComponent
  ],
  declarations: [
    LeafletFeatureComponent
  ],
  providers: [
  ],
})
export class LeafletFeatureModule { }
