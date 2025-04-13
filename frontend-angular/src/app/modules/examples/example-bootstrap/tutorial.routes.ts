import { Routes } from '@angular/router';

import { TutorialComponent } from './tutorial.component';

export const routes: Routes = [
  {
    path: '', component: TutorialComponent, children: [
      { path: '', loadComponent: () => import(`./00-main/items.component`).then(mod => mod.ItemsComponent) },

      { path: 'accordions', loadComponent: () => import(`./accordions/items.component`).then(mod => mod.ItemsComponent) },
      { path: 'alerts', loadComponent: () => import(`./alerts/items.component`).then(mod => mod.ItemsComponent) },
      { path: 'badges', loadComponent: () => import(`./badges/items.component`).then(mod => mod.ItemsComponent) },
      { path: 'blockquotes', loadComponent: () => import(`./blockquotes/items.component`).then(mod => mod.ItemsComponent) },
      { path: 'breadcrumb', loadComponent: () => import(`./breadcrumb/items.component`).then(mod => mod.ItemsComponent) },
      { path: 'buttons', loadComponent: () => import(`./buttons/items.component`).then(mod => mod.ItemsComponent) },
      { path: 'cards', loadComponent: () => import(`./cards/items.component`).then(mod => mod.ItemsComponent) },
      { path: 'collapse', loadComponent: () => import(`./collapses/items.component`).then(mod => mod.ItemsComponent) },
      { path: 'checkbox', loadComponent: () => import(`./checkbox/items.component`).then(mod => mod.ItemsComponent) },
      { path: 'dropdowns', loadComponent: () => import(`./dropdowns/items.component`).then(mod => mod.ItemsComponent) },
      { path: 'forms', loadComponent: () => import(`./forms/items.component`).then(mod => mod.ItemsComponent) },
      { path: 'list-group', loadComponent: () => import(`./list-group/items.component`).then(mod => mod.ItemsComponent) },
      { path: 'pagination', loadComponent: () => import(`./pagination/items.component`).then(mod => mod.ItemsComponent) },
      { path: 'progress', loadComponent: () => import(`./progress/items.component`).then(mod => mod.ItemsComponent) },
      { path: 'spinners', loadComponent: () => import(`./spinners/items.component`).then(mod => mod.ItemsComponent) },
      { path: 'tables', loadComponent: () => import(`./tables/items.component`).then(mod => mod.ItemsComponent) },
      { path: 'typography', loadComponent: () => import(`./typography/items.component`).then(mod => mod.ItemsComponent) },
      {
        path: '',
        redirectTo: '/bootstrap/alerts',
        pathMatch: 'full'
      },
      {
        path: '**',
        loadComponent: () => import(`./00-main/items.component`).then(mod => mod.ItemsComponent)
      },

    ]
  },
];