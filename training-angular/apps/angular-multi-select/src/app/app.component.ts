import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-table';
  dataTable: any;

  constructor() {
    this.dataTable = [];
  }

  showTable() {
    const items =
      [
        { id: 1000, title: 'Dune', enabled: true, checked: false },
        { id: 2000, title: 'Alien', enabled: false, checked: true },
        { id: 3000, title: 'Predator', enabled: true, checked: true },
        { id: 4000, title: 'Avatar', enabled: false, checked: false },
      ]
    this.dataTable = items;
  }

  onChange(event: any) {
    console.log('onChange:' + JSON.stringify(event));
  }

  toggleAll(column: string, event: any) {
    const isChecked = event.target.checked;
    this.dataTable.forEach((item: any) => {
      item[column] = isChecked;
    });
    this.onChange(event);
  }

}
