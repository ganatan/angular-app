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
        path: 'single',
        loadChildren: () => import('./01-single/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'multi',
        loadChildren: () => import('./02-multi/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'init-class',
        loadChildren: () => import('./03-init-class/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: '',
        redirectTo: '/template-driven-forms/init',
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
