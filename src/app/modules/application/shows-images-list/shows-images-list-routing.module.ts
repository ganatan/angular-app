import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowsImagesListComponent } from './shows-images-list.component';

const routes: Routes = [
  { path: '', component: ShowsImagesListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowsImagesListRoutingModule { }
