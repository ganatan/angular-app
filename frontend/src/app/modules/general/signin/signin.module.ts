import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninComponent } from './signin.component';
import { SigninRoutingModule } from './signin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SigninRoutingModule
  ],
  exports: [
    SigninComponent
  ],
  declarations: [
    SigninComponent
  ],
  providers: [
  ],
})
export class SigninModule { }