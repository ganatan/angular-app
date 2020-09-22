import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialComponent } from './tutorial.component';

const routes: Routes = [
  {
    path: '', component: TutorialComponent, children: [
      {
        path: '',
        loadChildren: () => import('./00-main/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'in-memory-web',
        loadChildren: () => import('./01-in-memory-web/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'in-memory-web-from-service',
        loadChildren: () => import('./02-in-memory-web-from-service/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'get-all',
        loadChildren: () => import('./11-get-all/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'get-all-one',
        loadChildren: () => import('./12-get-all-one/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'get-all-one-from-service',
        loadChildren: () => import('./13-get-all-one-from-service/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRoutingModule { }
