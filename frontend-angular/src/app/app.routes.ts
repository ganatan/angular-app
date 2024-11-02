import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, },

  {
    path: 'contact',
    loadChildren: () => import('./features/contact/contact.module')
      .then(mod => mod.ContactModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./features/about/about.routes').then(routes => routes.routes)
  },
  {
    path: 'continents',
    loadChildren: () => import('./features/continent/tutorial.module')
      .then(mod => mod.TutorialModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'continents/:id',
    loadChildren: () => import('./features/continent-form/tutorial.module')
      .then(mod => mod.TutorialModule),
    canActivate: [AuthGuard]
  },

  { path: '**', component: NotFoundComponent }
];