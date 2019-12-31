import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'chartjs',
    loadChildren: () => import('./modules/application/chartjs/chartjs.module').then(mod => mod.ChartjsModule)
  },
  {
    path: 'directives',
    loadChildren: () => import('./modules/application/directives/directives.module').then(mod => mod.DirectivesModule)
  },
  {
    path: 'movies-images-list',
    loadChildren: () => import('./modules/application/movies-images-list/movies-images-list.module').then(mod => mod.MoviesImagesListModule)
  },
  {
    path: 'httpclient',
    loadChildren: () => import('./modules/application/items/items.module').then(mod => mod.ItemsModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./modules/application/services/services.module').then(mod => mod.ServicesModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./modules/application/components/components.module').then(mod => mod.ComponentsModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/general/about/about.module').then(mod => mod.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/general/contact/contact.module').then(mod => mod.ContactModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./modules/general/signin/signin.module').then(mod => mod.SigninModule)
  },
  { path: '', component: HomeComponent, },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
