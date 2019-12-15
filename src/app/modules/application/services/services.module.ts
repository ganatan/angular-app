import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services-routing.module';

import { SafePipe } from './safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ServicesRoutingModule
  ],
  exports: [
    ServicesComponent
  ],
  declarations: [
    ServicesComponent,
    SafePipe,
  ],
  providers: [
  ],
})
export class ServicesModule { }
