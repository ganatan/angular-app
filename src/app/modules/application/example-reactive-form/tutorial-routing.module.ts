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
        path: 'prototype',
        loadChildren: () => import('./01-prototype/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'form-control',
        loadChildren: () => import('./02-form-control/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'form-control-class',
        loadChildren: () => import('./03-form-control-class/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'form-group',
        loadChildren: () => import('./04-form-group/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'form-builder',
        loadChildren: () => import('./05-form-builder/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'form-builder-nested',
        loadChildren: () => import('./06-form-builder-nested/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'form-array',
        loadChildren: () => import('./07-form-array/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'form-multi',
        loadChildren: () => import('./08-form-multi/exercice.module')
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
