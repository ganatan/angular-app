import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './modules/general/home/home.component';
import { MoviesImagesListComponent } from './modules/application//movies-images-list/movies-images-list.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [

  //  { path: '', component: HomeComponent },
  { path: '', component: MoviesImagesListComponent },

  {
    path: 'continents',
    loadChildren: () => import('./modules/application/continents-list/continents-list.module').then(mod => mod.ContinentsListModule)
  },
  {
    path: 'countries',
    loadChildren: () => import('./modules/application/countries-list/countries-list.module').then(mod => mod.CountriesListModule)
  },
  {
    path: 'cities',
    loadChildren: () => import('./modules/application/cities-list/cities-list.module').then(mod => mod.CitiesListModule)
  },
  {
    path: 'shows',
    loadChildren: () => import('./modules/application/shows-list/shows-list.module').then(mod => mod.ShowsListModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./modules/application/movies-list/movies-list.module').then(mod => mod.MoviesListModule)
  },

  {
    path: 'shows-images',
    loadChildren: () => import('./modules/application/shows-images-list/shows-images-list.module').then(mod => mod.ShowsImagesListModule)
  },
  {
    path: 'movies-images',
    loadChildren: () => import('./modules/application/movies-images-list/movies-images-list.module').then(mod => mod.MoviesImagesListModule)
  },

  {
    path: 'continents/:id',
    loadChildren: () => import('./modules/application/continents-form/continents-form.module').then(mod => mod.ContinentsFormModule)
  },
  {
    path: 'countries/:id',
    loadChildren: () => import('./modules/application/countries-form/countries-form.module').then(mod => mod.CountriesFormModule)
  },
  {
    path: 'cities/:id',
    loadChildren: () => import('./modules/application/cities-form/cities-form.module').then(mod => mod.CitiesFormModule)
  },
  {
    path: 'shows/:id',
    loadChildren: () => import('./modules/application/shows-form/shows-form.module').then(mod => mod.ShowsFormModule)
  },
  {
    path: 'movies/:id',
    loadChildren: () => import('./modules/application/movies-form/movies-form.module').then(mod => mod.MoviesFormModule)
  },

  {
    path: 'dashboard',
    loadChildren: () => import('./modules/general/dashboard/dashboard.module').then(mod => mod.DashboardModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/general/about/about.module').then(mod => mod.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/general/contact/contact.module').then(mod => mod.ContactModule)
  },

  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
