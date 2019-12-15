import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesComponent } from './directives.component';
import { DirectivesRoutingModule } from './directives-routing.module';

import { HighlightDirective } from './highlight.directive';

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
    HighlightDirective
  ],
  providers: [
  ],
})
export class DirectivesModule { }