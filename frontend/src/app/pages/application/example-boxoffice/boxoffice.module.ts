import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxofficeComponent } from './boxoffice.component';
import { BoxofficeRoutingModule } from './boxoffice-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SafePipe } from './safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    BoxofficeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    BoxofficeComponent
  ],
  declarations: [
    BoxofficeComponent,
    SafePipe    
  ],
  providers: [
  ],
})
export class BoxofficeModule { }