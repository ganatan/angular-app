import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailingComponent } from './mailing.component';

const routes: Routes = [
  { path: '', component: MailingComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailingRoutingModule { }