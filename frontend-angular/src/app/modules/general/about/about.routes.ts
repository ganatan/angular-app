import { Routes } from '@angular/router';

import { About } from './about';

export const routes: Routes = [
  {
    path: '', component: About, children: [
      {
        path: '',
        loadComponent: () => import(`./experience/experience`)
          .then(mod => mod.Experience)
      },
      {
        path: 'experience',
        loadComponent: () => import(`./experience/experience`)
          .then(mod => mod.Experience)
      },
      {
        path: 'skill',
        loadComponent: () => import(`./skill/skill`)
          .then(mod => mod.Skill)
      },

      {
        path: '**',
        loadComponent: () => import(`./experience/experience`)
          .then(mod => mod.Experience)
      },

    ]
  },
];