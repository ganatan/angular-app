import { Routes } from '@angular/router';

import { HomeComponent } from './pages/general/home/home.component';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, },

  {
    path: 'landing-page',
    loadChildren: () => import('./pages/application/example-landing-page/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'crud',
    loadChildren: () => import('./pages/application/example-crud/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/application/example-news/news.module')
      .then(mod => mod.NewsModule)
  },
  {
    path: 'news/:id',
    loadChildren: () => import('./pages/application/example-news-form/news-form.module')
      .then(mod => mod.NewsFormModule)
  },
  {
    path: 'boxoffice',
    loadChildren: () => import('./pages/application/example-boxoffice/boxoffice.module')
      .then(mod => mod.BoxofficeModule)
  },
  {
    path: 'boxoffice/:id',
    loadChildren: () => import('./pages/application/example-boxoffice-form/boxoffice-form.module')
      .then(mod => mod.BoxofficeFormModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/application/example-modal/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'prism',
    loadChildren: () => import('./pages/application/example-prism/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'prettyjson',
    loadChildren: () => import('./pages/application/example-prettyjson/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./pages/application/example-cards/tutorial.module')
      .then(mod => mod.TutorialModule)
  },  {
    path: 'httpclient',
    loadChildren: () => import('./pages/application/example-items/items.module')
      .then(mod => mod.ItemsModule)
  },
  {
    path: 'bootstrap',
    loadChildren: () => import('./pages/application/example-bootstrap/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./pages/application/example-components/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./pages/application/example-forms/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/application/example-services/tutorial.module')
      .then(mod => mod.TutorialModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./pages/general/login/login.module')
      .then(mod => mod.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/general/signup/signup.module')
      .then(mod => mod.SignupModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/general/contact/contact.module')
      .then(mod => mod.ContactModule)
  },

  {
    path: 'about',
    loadChildren: () => import('./pages/general/about/about.routes').then(routes => routes.routes)
  },

  { path: '**', component: NotFoundComponent }
];