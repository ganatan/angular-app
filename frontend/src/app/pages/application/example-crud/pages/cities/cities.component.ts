import { Component, Injector } from '@angular/core';

import { PageListComponent } from '../../components/page-list/page-list.component';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent extends PageListComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  override initialize(): void {

    this.endpoint = 'cities';
    this.link = 'cities';
    this.placeholder = 'cities...';
    this.results = 'Cities';
    this.found = 'cities';
    this.creation = 'City';
    this.loaded = false;
    this.icon = 'fas fa-city';
    this.itemsCount = 0;
    this.itemsPerPage = 10;
    this.linkRoute = 'cities';

    this.columns = [
      {
        type: 'num',
        title: { caption: 'N°', class: 'text-info font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' },
        data: { field: 'N°', class: 'text-info text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' }
      },
      {
        type: 'pos',
        title: { caption: 'Pos', class: 'text-info font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' },
        data: { field: 'Pos', class: 'text-info text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' }
      },
      {
        title: { caption: 'Id', class: 'text-info font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' },
        data: { field: 'id', class: 'text-info text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' }
      },
      {
        type: 'wiki',
        title: { caption: 'Wiki', class: 'text-center text-success' },
        data: { field: 'wikipediaLink', class: 'text-center text-success' }
      },
      {
        title: { caption: 'Name', class: 'text-primary font-weight-bold text-center' },
        data: { field: 'name', class: 'text-primary font-weight-bold text-center' }
      },
      {
        type: 'checkbox',
        title: { caption: 'Capital', class: 'font-weight-bold text-center' },
        data: { field: 'capital', class: 'font-weight-bold text-center' }
      },
      {
        type: 'subfield',
        title: { caption: 'Country', class: 'text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
        data: {
          field: 'country',
          subfield: 'name',
          class: 'text-secondary text-center d-none d-lg-table-cell d-xl-table-cell'
        }
      },
      {
        type: 'img',
        title: { caption: 'Flag', class: 'text-secondary font-weight-bold text-center' },
        data: { field: 'image', class: 'font-weight-bold text-center' }
      },
      {
        type: 'subfield',
        title: { caption: 'Continent', class: 'text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
        data: {
          field: 'continent',
          subfield: 'name',
          class: 'text-secondary text-center d-none d-lg-table-cell d-xl-table-cell'
        }
      },
      {
        type: 'subfield',
        title: { caption: 'Code', class: 'text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
        data: {
          field: 'continent',
          subfield: 'code',
          class: 'text-secondary text-center d-none d-lg-table-cell d-xl-table-cell'
        }
      },
    ];

    super.initialize();
  }

}
