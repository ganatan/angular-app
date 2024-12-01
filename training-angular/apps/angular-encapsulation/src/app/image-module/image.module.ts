import { NgModule } from '@angular/core';
import { ImageModuleComponent } from './image.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ImageModuleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ImageModuleComponent
  ]
})
export class ImageModuleModule { }
