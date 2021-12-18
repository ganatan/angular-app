import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialComponent } from './tutorial.component';

const routes: Routes = [
  {
    path: '', component: TutorialComponent, children: [
      {
        path: 'continents',
        loadChildren: () => import('./pages/continents/continents.module')
          .then(mod => mod.ContinentsModule)
      },
      {
        path: 'countries',
        loadChildren: () => import('./pages/countries/countries.module')
          .then(mod => mod.CountriesModule)
      },
      {
        path: 'cities',
        loadChildren: () => import('./pages/cities/cities.module')
          .then(mod => mod.CitiesModule)
      },
      {
        path: 'shows',
        loadChildren: () => import('./pages/shows/shows.module')
          .then(mod => mod.ShowsModule)
      },
      {
        path: 'movies',
        loadChildren: () => import('./pages/movies/movies.module')
          .then(mod => mod.MoviesModule)
      },
      {
        path: 'shows-images',
        loadChildren: () => import('./pages/shows-images/shows-images.module')
          .then(mod => mod.ShowsImagesModule)
      },
      {
        path: 'movies-images',
        loadChildren: () => import('./pages/movies-images/movies-images.module')
          .then(mod => mod.MoviesImagesModule)
      },
      {
        path: 'continents/:id',
        loadChildren: () => import('./pages/continents-form/continents-form.module')
          .then(mod => mod.ContinentsFormModule)
      },
      {
        path: 'countries/:id',
        loadChildren: () => import('./pages/countries-form/countries-form.module')
          .then(mod => mod.CountriesFormModule)
      },
      {
        path: 'cities/:id',
        loadChildren: () => import('./pages/cities-form/cities-form.module')
          .then(mod => mod.CitiesFormModule)
      },
      {
        path: 'shows/:id',
        loadChildren: () => import('./pages/shows-form/shows-form.module')
          .then(mod => mod.ShowsFormModule)
      },
      {
        path: 'movies/:id',
        loadChildren: () => import('./pages/movies-form/movies-form.module')
          .then(mod => mod.MoviesFormModule)
      },
      {
        path: '',
        loadChildren: () => import('./pages/movies-images/movies-images.module')
          .then(mod => mod.MoviesImagesModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRoutingModule { }
