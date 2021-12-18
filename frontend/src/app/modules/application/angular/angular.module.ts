import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './angular.component';

@NgModule({
  declarations: [
    AngularComponent,
  ],
  imports: [
    CommonModule,
    AngularRoutingModule
  ],
  exports: [
    AngularComponent,
  ],
})
export class AngularModule { }
