import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsComponent } from './news.component';
import { NewsRoutingModule } from './news-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoryPipe } from './category.pipe';
import { SafePipe } from './safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NewsComponent
  ],
  declarations: [
    NewsComponent,
    CategoryPipe,
    SafePipe,
  ],
  providers: [
  ],
})
export class NewsModule { }