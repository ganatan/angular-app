import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryAngularComponent } from './library-angular.component';

const routes: Routes = [
  { path: '', component: LibraryAngularComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryAngularRoutingModule { }