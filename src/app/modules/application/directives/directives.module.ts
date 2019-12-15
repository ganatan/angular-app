import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesComponent } from './directives.component';
import { DirectivesRoutingModule } from './directives-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DirectivesRoutingModule
  ],
  exports: [
    DirectivesComponent
  ],
  declarations: [
    DirectivesComponent,
  ],
  providers: [
  ],
})
export class DirectivesModule { }
