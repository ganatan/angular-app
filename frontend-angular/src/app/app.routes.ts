import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, },

  {
    path: 'continents',
    loadChildren: () => import('./features/continent/tutorial.module')
      .then(mod => mod.TutorialModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'library-angular',
    loadChildren: () => import('./features/library-angular/library-angular.module')
      .then(mod => mod.LibraryAngularModule),
  },
  
  {
    path: 'continents/:id',
    loadChildren: () => import('./features/continent-form/tutorial.module')
      .then(mod => mod.TutorialModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'landing-page',
    loadChildren: () => import('./features/examples/example-landing-page/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'crud',
    loadChildren: () => import('./features/examples/example-crud/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./features/examples/example-news/news.module')
      .then(mod => mod.NewsModule)
  },
  {
    path: 'news/:id',
    loadChildren: () => import('./features/examples/example-news-form/news-form.module')
      .then(mod => mod.NewsFormModule)
  },
  {
    path: 'boxoffice',
    loadChildren: () => import('./features/examples/example-boxoffice/boxoffice.module')
      .then(mod => mod.BoxofficeModule)
  },
  {
    path: 'boxoffice/:id',
    loadChildren: () => import('./features/examples/example-boxoffice-form/boxoffice-form.module')
      .then(mod => mod.BoxofficeFormModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./features/examples/example-modal/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'prism',
    loadChildren: () => import('./features/examples/example-prism/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'prettyjson',
    loadChildren: () => import('./features/examples/example-prettyjson/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./features/examples/example-cards/tutorial.module')
      .then(mod => mod.TutorialModule)
  },  {
    path: 'httpclient',
    loadChildren: () => import('./features/examples/example-items/items.module')
      .then(mod => mod.ItemsModule)
  },
  {
    path: 'bootstrap',
    loadChildren: () => import('./features/examples/example-bootstrap/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./features/examples/example-components/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./features/examples/example-forms/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./features/examples/example-services/tutorial.module')
      .then(mod => mod.TutorialModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module')
      .then(mod => mod.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./features/signup/signup.module')
      .then(mod => mod.SignupModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./features/contact/contact.module')
      .then(mod => mod.ContactModule)
  },

  {
    path: 'about',
    loadChildren: () => import('./features/about/about.routes').then(routes => routes.routes)
  },


  { path: '**', component: NotFoundComponent }
];