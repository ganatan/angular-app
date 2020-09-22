import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExerciceComponent } from './exercice.component';

import { FormsModule } from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryItemsService } from './in-memory-items.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ExerciceComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExerciceRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryItemsService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
      put204: false
    })
  ],
  exports: [ExerciceComponent],
  providers: []
})
export class ExerciceModule { }
