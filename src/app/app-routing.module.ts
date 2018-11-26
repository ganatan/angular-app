import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  {
    path: 'items',
    loadChildren: './modules/items/items.module#ItemsModule' ,
  },
  {
    path: 'about',
    loadChildren: './modules/about/about.module#AboutModule' ,
  },
  {
    path: 'contact',
    loadChildren: './modules/contact/contact.module#ContactModule' ,
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
