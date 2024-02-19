import { NgModule } from '@angular/core';
import { CheckboxComponent } from './checkbox.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CheckboxComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    CheckboxComponent
  ]
})
export class CheckboxModule { }
