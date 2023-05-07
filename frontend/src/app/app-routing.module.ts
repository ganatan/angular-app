import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  {
    path: 'landing-page',
    loadChildren: () => import('./modules/application/example-landing-page/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'crud',
    loadChildren: () => import('./modules/application/example-crud/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./modules/application/example-news/news.module')
      .then(mod => mod.NewsModule)
  },
  {
    path: 'news/:id',
    loadChildren: () => import('./modules/application/example-news-form/news-form.module')
      .then(mod => mod.NewsFormModule)
  },
  {
    path: 'boxoffice',
    loadChildren: () => import('./modules/application/example-boxoffice/boxoffice.module')
      .then(mod => mod.BoxofficeModule)
  },
  {
    path: 'boxoffice/:id',
    loadChildren: () => import('./modules/application/example-boxoffice-form/boxoffice-form.module')
      .then(mod => mod.BoxofficeFormModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modules/application/example-modal/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'prism',
    loadChildren: () => import('./modules/application/example-prism/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'prettyjson',
    loadChildren: () => import('./modules/application/example-prettyjson/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./modules/application/example-cards/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'httpclient',
    loadChildren: () => import('./modules/application/example-httpclient/items.module')
      .then(mod => mod.ItemsModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/general/contact/contact.module')
      .then(mod => mod.ContactModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/general/about/about.module')
      .then(mod => mod.AboutModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/general/login/login.module')
      .then(mod => mod.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./modules/general/signup/signup.module')
      .then(mod => mod.SignupModule)
  },
  {
    path: 'bootstrap',
    loadChildren: () => import('./modules/application/example-bootstrap/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./modules/application/example-components/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./modules/application/example-forms/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./modules/application/example-services/tutorial.module')
      .then(mod => mod.TutorialModule)
  },


  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // initialNavigation: 'enabledBlocking'
    useHash: false,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'    
  })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }