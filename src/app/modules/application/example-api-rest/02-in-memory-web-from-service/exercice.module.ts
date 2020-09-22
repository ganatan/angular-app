import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExerciceComponent } from './exercice.component';

import { ItemsService } from './items.service';
import { FormsModule } from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemItemsService } from './in-memory-items.service';
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
      InMemItemsService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
      put204: false
    })
  ],
  exports: [ExerciceComponent],
  providers: [ItemsService]
})
export class ExerciceModule { }
