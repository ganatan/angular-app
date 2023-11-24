import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';

const routes: Routes = [
  {
    path: '', component: ContactComponent, children: [
      {
        path: '',
        loadChildren: () => import(`./mailing/mailing.module`)
          .then(mod => mod.MailingModule)
      },

      {
        path: 'mailing',
        loadChildren: () => import(`./mailing/mailing.module`)
          .then(mod => mod.MailingModule)
      },
      {
        path: 'mapping',
        loadChildren: () => import(`./mapping/mapping.module`)
          .then(mod => mod.MappingModule)
      },
      {
        path: 'website',
        loadChildren: () => import(`./website/website.module`)
          .then(mod => mod.WebsiteModule)
      },

      {
        path: '**',
        loadChildren: () => import(`./mailing/mailing.module`)
          .then(mod => mod.MailingModule)
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }