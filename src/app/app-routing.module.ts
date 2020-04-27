import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  {
    path: 'movies-images-list',
    loadChildren: () => import('./modules/application/movies-images-list/movies-images-list.module')
      .then(mod => mod.MoviesImagesListModule)
  },
  {
    path: 'leaflet',
    loadChildren: () => import('./modules/application/example-leaflet/example-leaflet.module')
      .then(mod => mod.ExampleLeafletModule)
  },
  {
    path: 'charts',
    loadChildren: () => import('./modules/application/example-charts/example-charts.module')
      .then(mod => mod.ExampleChartsModule)
  },
  {
    path: 'httpclient',
    loadChildren: () => import('./modules/application/items/items.module')
      .then(mod => mod.ItemsModule)
  },
  {
    path: 'template-driven-forms',
    loadChildren: () => import('./modules/application/example-template-driven-forms/example-template-driven-forms.module')
      .then(mod => mod.ExampleTemplateDrivenFormsModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./modules/application/example-components/example-components.module')
      .then(mod => mod.ExampleComponentsModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./modules/application/example-services/example-services.module')
      .then(mod => mod.ExampleServicesModule)
  },
  {
    path: 'reactive-form',
    loadChildren: () => import('./modules/application/example-reactive-form/example-reactive-form.module')
      .then(mod => mod.ExampleReactiveFormModule)
  },
  {
    path: 'bootstrap-prototype',
    loadChildren: () => import('./modules/application/example-bootstrap-prototype/example-bootstrap-prototype.module')
      .then(mod => mod.ExampleBootstrapPrototypeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/general/about/about.module')
      .then(mod => mod.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/general/contact/contact.module')
      .then(mod => mod.ContactModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./modules/general/signin/signin.module')
      .then(mod => mod.SigninModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
