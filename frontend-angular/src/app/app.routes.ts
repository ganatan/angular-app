import { Routes } from '@angular/router';

import { HomeComponent } from './features/general/home/home.component'
import { NotFoundComponent } from './features/general/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, },

  {
    path: 'prism',
    loadComponent: () => import('./features/tutorials/example-prism/tutorial.component')
      .then(mod => mod.TutorialComponent)
  },
  {
    path: 'continents',
    loadComponent: () => import('./features/general/continent/item.component')
      .then(mod => mod.ItemComponent)
  },
  {
    path: 'continents/:id',
    loadComponent: () => import('./features/general/continent-form/item.component')
      .then(mod => mod.ItemComponent)
  },

  {
    path: 'landing-page',
    loadComponent: () => import('./features/tutorials/example-landing-page/tutorial.component')
      .then(mod => mod.TutorialComponent)
  },
  {
    path: 'cards',
    loadComponent: () => import('./features/tutorials/example-cards/tutorial.component')
      .then(mod => mod.TutorialComponent)
  },
  {
    path: 'news',
    loadComponent: () => import('./features/tutorials/example-news/news.component')
      .then(mod => mod.NewsComponent)
  },
  {
    path: 'boxoffice',
    loadComponent: () => import('./features/tutorials/example-boxoffice/boxoffice.component')
      .then(mod => mod.BoxofficeComponent)
  },

  {
    path: 'httpclient',
    loadComponent: () => import('./features/tutorials/example-items/items.component')
      .then(mod => mod.ItemsComponent)
  },
  {
    path: 'bootstrap',
    loadChildren: () => import(`./features/tutorials/example-bootstrap/tutorial.routes`)
      .then(routes => routes.routes)
  },
  {
    path: 'components',
    loadComponent: () => import('./features/tutorials/example-components/tutorial.component')
      .then(mod => mod.TutorialComponent)
  },
  {
    path: 'forms',
    loadChildren: () => import(`./features/tutorials/example-forms/tutorial.routes`)
      .then(routes => routes.routes)
  },
  {
    path: 'services',
    loadComponent: () => import('./features/tutorials/example-services/tutorial.component')
      .then(mod => mod.TutorialComponent)
  },


  {
    path: 'login',
    loadComponent: () => import(`./features/general/login/login.component`)
      .then(mod => mod.LoginComponent)
  },
  {
    path: 'signup',
    loadComponent: () => import(`./features/general/signup/signup.component`)
      .then(mod => mod.SignupComponent)
  },

  {
    path: 'contact',
    loadChildren: () => import(`./features/general/contact/contact.routes`)
      .then(routes => routes.routes)
  },

  {
    path: 'about',
    loadChildren: () => import('./features/general/about/about.routes')
      .then(routes => routes.routes)
  },

  { path: '**', component: NotFoundComponent }
];