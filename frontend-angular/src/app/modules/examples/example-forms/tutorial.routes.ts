import { Routes } from '@angular/router';

import { TutorialComponent } from './tutorial.component';

export const routes: Routes = [
  {
    path: '', component: TutorialComponent, children: [
      { path: '', loadComponent: () => import('./00-main/exercice.component').then(mod => mod.ExerciceComponent) },

      { path: 'single', loadComponent: () => import('./01-single/exercice.component').then(mod => mod.ExerciceComponent) },
      { path: 'multi', loadComponent: () => import('./02-multi/exercice.component').then(mod => mod.ExerciceComponent) },
      { path: 'init-class', loadComponent: () => import('./03-init-class/exercice.component').then(mod => mod.ExerciceComponent) },
      { path: 'prototype', loadComponent: () => import('./04-prototype/exercice.component').then(mod => mod.ExerciceComponent) },
      { path: 'form-control', loadComponent: () => import('./05-form-control/exercice.component').then(mod => mod.ExerciceComponent) },
      { path: 'form-control-class', loadComponent: () => import('./06-form-control-class/exercice.component').then(mod => mod.ExerciceComponent) },
      { path: 'form-group', loadComponent: () => import('./07-form-group/exercice.component').then(mod => mod.ExerciceComponent) },
      { path: 'form-builder', loadComponent: () => import('./08-form-builder/exercice.component').then(mod => mod.ExerciceComponent) },
      { path: 'form-builder-nested', loadComponent: () => import('./09-form-builder-nested/exercice.component').then(mod => mod.ExerciceComponent) },
      { path: 'form-array', loadComponent: () => import('./10-form-array/exercice.component').then(mod => mod.ExerciceComponent) },
      { path: 'form-multi', loadComponent: () => import('./11-form-multi/exercice.component').then(mod => mod.ExerciceComponent) },

      { path: '**', loadComponent: () => import('./00-main/exercice.component').then(mod => mod.ExerciceComponent) },
    ]
  },
];