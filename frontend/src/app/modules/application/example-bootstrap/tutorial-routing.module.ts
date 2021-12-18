import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialComponent } from './tutorial.component';

import { AccordionsComponent } from './accordions/items.component';
import { AlertsComponent } from './alerts/items.component';
import { BadgesComponent } from './badges/items.component';
import { BlockquotesComponent } from './blockquotes/items.component';
import { BreadcrumbComponent } from './breadcrumb/items.component';
import { ButtonsComponent } from './buttons/items.component';
import { CardsComponent } from './cards/items.component';
import { CheckboxComponent } from './checkbox/items.component';
import { CollapsesComponent } from './collapses/items.component';
import { DropdownsComponent } from './dropdowns/items.component';
import { FormsComponent } from './forms/items.component';
import { ListGroupComponent } from './list-group/items.component';
import { ModalComponent } from './modal/items.component';
import { PaginationComponent } from './pagination/items.component';
import { PopoversComponent } from './popovers/items.component';
import { ProgressComponent } from './progress/items.component';
import { SpinnersComponent } from './spinners/items.component';
import { TablesComponent } from './tables/items.component';
import { TooltipsComponent } from './tooltips/items.component';
import { ToastsComponent } from './toasts/items.component';
import { TypographyComponent } from './typography/items.component';

const routes: Routes = [
  {
    path: '', component: TutorialComponent, children: [
      {
        path: '',
        loadChildren: () => import('./00-main/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      { path: 'accordions', component: AccordionsComponent },
      { path: 'alerts', component: AlertsComponent },
      { path: 'badges', component: BadgesComponent },
      { path: 'blockquotes', component: BlockquotesComponent },
      { path: 'breadcrumb', component: BreadcrumbComponent },
      { path: 'buttons', component: ButtonsComponent },
      { path: 'cards', component: CardsComponent },
      { path: 'collapse', component: CollapsesComponent },
      { path: 'checkbox', component: CheckboxComponent },
      { path: 'dropdowns', component: DropdownsComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'list-group', component: ListGroupComponent },
      { path: 'modal', component: ModalComponent },
      { path: 'pagination', component: PaginationComponent },
      { path: 'popovers', component: PopoversComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'spinners', component: SpinnersComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'toasts', component: ToastsComponent },
      { path: 'tooltips', component: TooltipsComponent },
      { path: 'typography', component: TypographyComponent },
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
