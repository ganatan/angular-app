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
        path: 'prototype',
        loadChildren: () => import('./04-prototype/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'form-control',
        loadChildren: () => import('./05-form-control/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'form-control-class',
        loadChildren: () => import('./06-form-control-class/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'form-group',
        loadChildren: () => import('./07-form-group/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'form-builder',
        loadChildren: () => import('./08-form-builder/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'form-builder-nested',
        loadChildren: () => import('./09-form-builder-nested/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'form-array',
        loadChildren: () => import('./10-form-array/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'form-multi',
        loadChildren: () => import('./11-form-multi/exercice.module')
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
