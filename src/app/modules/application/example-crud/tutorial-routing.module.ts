import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialComponent } from './tutorial.component';

const routes: Routes = [
  {
    path: '', component: TutorialComponent, children: [
      {
        path: 'continents',
        loadChildren: () => import('./pages/continents-list/continents-list.module').then(mod => mod.ContinentsListModule)
      },
      {
        path: 'countries',
        loadChildren: () => import('./pages/countries-list/countries-list.module').then(mod => mod.CountriesListModule)
      },
      {
        path: 'cities',
        loadChildren: () => import('./pages/cities-list/cities-list.module').then(mod => mod.CitiesListModule)
      },
      {
        path: 'shows',
        loadChildren: () => import('./pages/shows-list/shows-list.module').then(mod => mod.ShowsListModule)
      },
      {
        path: 'movies',
        loadChildren: () => import('./pages/movies-list/movies-list.module').then(mod => mod.MoviesListModule)
      },
      {
        path: 'shows-images',
        loadChildren: () => import('./pages/shows-images-list/shows-images-list.module').then(mod => mod.ShowsImagesListModule)
      },
      {
        path: 'movies-images',
        loadChildren: () => import('./pages/movies-images-list/movies-images-list.module').then(mod => mod.MoviesImagesListModule)
      },
      {
        path: 'continents/:id',
        loadChildren: () => import('./pages/continents-form/continents-form.module').then(mod => mod.ContinentsFormModule)
      },
      {
        path: 'countries/:id',
        loadChildren: () => import('./pages/countries-form/countries-form.module').then(mod => mod.CountriesFormModule)
      },
      {
        path: 'cities/:id',
        loadChildren: () => import('./pages/cities-form/cities-form.module').then(mod => mod.CitiesFormModule)
      },
      {
        path: 'shows/:id',
        loadChildren: () => import('./pages/shows-form/shows-form.module').then(mod => mod.ShowsFormModule)
      },
      {
        path: 'movies/:id',
        loadChildren: () => import('./pages/movies-form/movies-form.module').then(mod => mod.MoviesFormModule)
      },
      {
        path: '',
        loadChildren: () => import('./pages/movies-images-list/movies-images-list.module').then(mod => mod.MoviesImagesListModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRoutingModule { }
