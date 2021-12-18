import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowsImagesComponent } from './shows-images.component';

const routes: Routes = [
  { path: '', component: ShowsImagesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowsImagesRoutingModule { }
