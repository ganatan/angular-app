import { Routes } from '@angular/router';

import { ContactComponent } from './contact.component';

export const routes: Routes = [
  {
    path: '', component: ContactComponent, children: [
      {
        path: '',
        loadComponent: () => import(`./mailing/mailing.component`)
          .then(mod => mod.MailingComponent)
      },
      {
        path: 'mapping',
        loadComponent: () => import(`./mapping/mapping.component`)
          .then(mod => mod.MappingComponent)
      },
      {
        path: 'website',
        loadComponent: () => import(`./website/website.component`)
          .then(mod => mod.WebsiteComponent)
      },

      {
        path: '**',
        loadComponent: () => import(`./mailing/mailing.component`)
          .then(mod => mod.MailingComponent)
      },

    ]
  },
];