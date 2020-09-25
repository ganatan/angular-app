import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialComponent } from './tutorial.component';

const routes: Routes = [
  {
    path: '', component: TutorialComponent, children: [
      {
        path: 'modules',
        loadChildren: () => import('./01-modules/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'interfaces',
        loadChildren: () => import('./02-interfaces/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'classes',
        loadChildren: () => import('./03-classes/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'functions',
        loadChildren: () => import('./04-functions/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'types',
        loadChildren: () => import('./05-types/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'typing-function',
        loadChildren: () => import('./06-typing-function/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: '',
        redirectTo: '/typescript/modules',
        pathMatch: 'full'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRoutingModule { }
