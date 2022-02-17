import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';

const routes: Routes = [
  {
    path: '', component: ContactComponent, children: [
      {
        path: '',
        loadChildren: () => import(`./mailing/mailing.module`)
          .then(module => module.MailingModule)
      },
      {
        path: 'mailing',
        loadChildren: () => import(`./mailing/mailing.module`)
          .then(module => module.MailingModule)
      },
      {
        path: 'map',
        loadChildren: () => import(`./map/map.module`)
          .then(module => module.MapModule)
      },
      {
        path: '**',
        loadChildren: () => import(`./mailing/mailing.module`)
          .then(module => module.MailingModule)
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }