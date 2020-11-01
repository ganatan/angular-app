import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GridImagesRoutingModule } from './grid-images-routing.module';
import { GridImagesComponent } from './grid-images.component';

@NgModule({
  declarations: [
    GridImagesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    GridImagesRoutingModule
  ],
  exports: [
    GridImagesComponent
  ],
})
export class GridImagesModule { }
