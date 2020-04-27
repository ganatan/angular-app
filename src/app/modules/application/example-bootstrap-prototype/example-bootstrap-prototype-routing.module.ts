import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleBootstrapPrototypeComponent } from './example-bootstrap-prototype.component';

import { AlertsComponent } from './components/alerts/items.component';
import { BadgeComponent } from './components/badge/items.component';
import { BreadcrumbComponent } from './components/breadcrumb/items.component';
import { ButtonsComponent } from './components/buttons/items.component';
import { TooltipsComponent } from './components/tooltips/items.component';
import { CollapseComponent } from './components/collapse/items.component';
import { DropdownsComponent } from './components/dropdowns/items.component';
import { FormsComponent } from './components/forms/items.component';
import { ListGroupComponent } from './components/list-group/items.component';
import { ModalComponent } from './components/modal/items.component';
import { PaginationComponent } from './components/pagination/items.component';
import { PopoversComponent } from './components/popovers/items.component';
import { ProgressComponent } from './components/progress/items.component';
import { SpinnersComponent } from './components/spinners/items.component';
import { ToastsComponent } from './components/toasts/items.component';

const routes: Routes = [
  {
    path: '', component: ExampleBootstrapPrototypeComponent, children: [
      { path: 'alerts', component: AlertsComponent },
      { path: 'badge', component: BadgeComponent },
      { path: 'breadcrumb', component: BreadcrumbComponent },
      { path: 'buttons', component: ButtonsComponent },
      { path: 'tooltips', component: TooltipsComponent },
      { path: 'collapse', component: CollapseComponent },
      { path: 'dropdowns', component: DropdownsComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'list-group', component: ListGroupComponent },
      { path: 'modal', component: ModalComponent },
      { path: 'pagination', component: PaginationComponent },
      { path: 'popovers', component: PopoversComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'spinners', component: SpinnersComponent },
      { path: 'toasts', component: ToastsComponent },
      {
        path: '',
        redirectTo: '/bootstrap-prototype/alerts',
        pathMatch: 'full'
      },
      { path: '**', component: AlertsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleBootstrapPrototypeRoutingModule { }
