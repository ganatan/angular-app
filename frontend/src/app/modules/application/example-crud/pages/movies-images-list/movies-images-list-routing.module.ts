import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesImagesListComponent } from './movies-images-list.component';

const routes: Routes = [
  { path: '', component: MoviesImagesListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesImagesListRoutingModule { }
