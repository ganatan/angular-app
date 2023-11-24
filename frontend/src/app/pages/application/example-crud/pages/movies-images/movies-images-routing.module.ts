import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesImagesComponent } from './movies-images.component';

const routes: Routes = [
  { path: '', component: MoviesImagesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesImagesRoutingModule { }
