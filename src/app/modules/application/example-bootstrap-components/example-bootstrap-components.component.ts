import { Component } from '@angular/core';

@Component({
  selector: 'app-example-bootstrap-components',
  templateUrl: './example-bootstrap-components.component.html',
  styleUrls: ['./example-bootstrap-components.component.css']
})

export class ExampleBootstrapComponentsComponent {
  current = 1;
  features = [
    { id: 1, name: 'Alerts', link: 'alerts' },
    { id: 2, name: 'Badge', link: 'badge' },
    { id: 3, name: 'Breadcrumb', link: 'breadcrumb' },
    { id: 4, name: 'Buttons', link: 'buttons' },
    { id: 5, name: 'Collapse', link: 'collapse' },
    { id: 6, name: 'Dropdowns', link: 'dropdowns' },
    { id: 7, name: 'Forms', link: 'forms' },
    { id: 8, name: 'List Group', link: 'list-group' },
    { id: 9, name: 'Modal', link: 'modal' },
    { id: 10, name: 'Pagination', link: 'pagination' },
    { id: 11, name: 'Popovers', link: 'popovers' },
    { id: 12, name: 'Progress', link: 'progress' },
    { id: 13, name: 'Spinners', link: 'spinners' },
    { id: 14, name: 'Toasts', link: 'toasts' },
    { id: 15, name: 'Tooltips', link: 'tooltips' },
  ];

  changeItem(item: any) {
    this.current = item.id;
  }

}
