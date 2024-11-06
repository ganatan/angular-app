import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryAngularComponent } from './library-angular.component';
import { LibraryAngularRoutingModule } from './library-angular-routing.module';

import { NgaEditComponent } from '@ganatan-angular/nga-edit';
import { NgaTableComponent } from '@ganatan-angular/nga-table';

@NgModule({
  imports: [
    CommonModule,
    LibraryAngularRoutingModule,
    NgaEditComponent,
    NgaTableComponent,
  ],
  exports: [
    LibraryAngularComponent
  ],
  declarations: [
    LibraryAngularComponent
  ],
  providers: [
  ],
})
export class LibraryAngularModule { }