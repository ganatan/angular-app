import { Routes } from '@angular/router';

import { Contact } from './contact';

export const routes: Routes = [
  {
    path: '', component: Contact, children: [
      {
        path: '',
        loadComponent: () => import(`./mailing/mailing`)
          .then(mod => mod.Mailing)
      },
      {
        path: 'mapping',
        loadComponent: () => import(`./mapping/mapping`)
          .then(mod => mod.Mapping)
      },
      {
        path: 'website',
        loadComponent: () => import(`./website/website`)
          .then(mod => mod.Website)
      },

      {
        path: '**',
        loadComponent: () => import(`./mailing/mailing`)
          .then(mod => mod.Mailing)
      },

    ]
  },
];