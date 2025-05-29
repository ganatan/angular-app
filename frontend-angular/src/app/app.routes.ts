import { Routes } from '@angular/router';

import { Home } from './modules/general/home/home';
import { NotFound } from './modules/general/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home, },

  {
    path: 'landing-page',
    loadComponent: () => import('./modules/examples/example-landing-page/tutorial.component')
      .then(mod => mod.TutorialComponent)
  },
  {
    path: 'cards',
    loadComponent: () => import('./modules/examples/example-cards/tutorial.component')
      .then(mod => mod.TutorialComponent)
  },
  {
    path: 'news',
    loadComponent: () => import('./modules/examples/example-news/news.component')
      .then(mod => mod.NewsComponent)
  },
  {
    path: 'boxoffice',
    loadComponent: () => import('./modules/examples/example-boxoffice/boxoffice.component')
      .then(mod => mod.BoxofficeComponent)
  },
  {
    path: 'httpclient',
    loadComponent: () => import('./modules/examples/example-items/items.component')
      .then(mod => mod.ItemsComponent)
  },
  {
    path: 'bootstrap',
    loadChildren: () => import(`./modules/examples/example-bootstrap/tutorial.routes`)
      .then(routes => routes.routes)
  },
  {
    path: 'components',
    loadComponent: () => import('./modules/examples/example-components/tutorial.component')
      .then(mod => mod.TutorialComponent)
  },
  {
    path: 'forms',
    loadChildren: () => import(`./modules/examples/example-forms/tutorial.routes`)
      .then(routes => routes.routes)
  },
  {
    path: 'services',
    loadComponent: () => import('./modules/examples/example-services/tutorial.component')
      .then(mod => mod.TutorialComponent)
  },


  {
    path: 'login',
    loadComponent: () => import(`./modules/general/login/login`)
      .then(mod => mod.Login)
  },
  {
    path: 'signup',
    loadComponent: () => import(`./modules/general/signup/signup`)
      .then(mod => mod.Signup)
  },
  {
    path: 'contact',
    loadChildren: () => import(`./modules/general/contact/contact.routes`)
      .then(routes => routes.routes)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/general/about/about.routes')
      .then(routes => routes.routes)
  },

  {
    path: 'cities',
    loadComponent: () => import('./modules/features/crud/city/item.component')
      .then(mod => mod.ItemComponent)
  },
  {
    path: 'persons',
    loadComponent: () => import('./modules/features/crud/person/item.component')
      .then(mod => mod.ItemComponent)
  },
  {
    path: 'countries',
    loadComponent: () => import('./modules/features/crud/country/item.component')
      .then(mod => mod.ItemComponent)
  },
  {
    path: 'professions',
    loadComponent: () => import('./modules/features/crud/profession/item.component')
      .then(mod => mod.ItemComponent)
  },

  {
    path: 'continents',
    loadComponent: () => import('./modules/features/crud/continent/item.component')
      .then(mod => mod.ItemComponent)
  },

  { path: '**', component: NotFound }
];