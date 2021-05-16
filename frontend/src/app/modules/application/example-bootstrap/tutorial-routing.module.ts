import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialComponent } from './tutorial.component';

import { AlertsComponent } from './alerts/items.component';
import { BadgeComponent } from './badge/items.component';
import { BlockquotesComponent } from './blockquotes/items.component';
import { BreadcrumbComponent } from './breadcrumb/items.component';
import { ButtonsComponent } from './buttons/items.component';
import { TooltipsComponent } from './tooltips/items.component';
import { CollapseComponent } from './collapse/items.component';
import { DropdownsComponent } from './dropdowns/items.component';
import { FormsComponent } from './forms/items.component';
import { ListGroupComponent } from './list-group/items.component';
import { ModalComponent } from './modal/items.component';
import { PaginationComponent } from './pagination/items.component';
import { PopoversComponent } from './popovers/items.component';
import { ProgressComponent } from './progress/items.component';
import { SpinnersComponent } from './spinners/items.component';
import { ToastsComponent } from './toasts/items.component';

const routes: Routes = [
  {
    path: '', component: TutorialComponent, children: [
      {
        path: '',
        loadChildren: () => import('./00-main/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      { path: 'alerts', component: AlertsComponent },
      { path: 'badge', component: BadgeComponent },
      { path: 'blockquotes', component: BlockquotesComponent },
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
        redirectTo: '/bootstrap/alerts',
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
export class TutorialRoutingModule { }
