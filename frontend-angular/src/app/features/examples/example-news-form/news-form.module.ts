import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExerciceRoutingModule } from './news-form-routing.module';
import { NewsFormComponent } from './news-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PrettyJsonPipe } from './pretty-json.pipe';

@NgModule({
  declarations: [
    NewsFormComponent,
    PrettyJsonPipe
  ],
  providers: [
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NewsFormComponent
  ],
})
export class NewsFormModule { }
