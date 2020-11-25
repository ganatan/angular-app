import { Component, Injector } from '@angular/core';

import { PageListComponent } from '../../components/page-list/page-list.component';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent extends PageListComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  initialize(): void {

    this.endpoint = 'countries';
    this.link = 'countries';
    this.placeholder = 'countries...';
    this.results = 'Countries';
    this.found = 'countries';
    this.creation = 'Country';
    this.loaded = false;
    this.icon = 'far fa-flag';
    this.itemsCount = 0;
    this.itemsPerPage = 20;
    this.linkRoute = 'countries';

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
        type: 'img',
        title: { caption: 'Flag', class: 'font-weight-bold text-center' },
        data: { field: 'image', class: 'font-weight-bold text-center' }
      },
      {
        title: { caption: 'Iso2', class: 'text-center' },
        data: { field: 'isoAlpha2', class: 'text-center' }
      },
      {
        title: { caption: 'Iso3', class: 'text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' },
        data: { field: 'isoAlpha3', class: 'text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' }
      },
      {
        title: { caption: 'Iso', class: 'text-center d-none d-lg-table-cell d-xl-table-cell' },
        data: { field: 'isoNumeric', class: 'text-center d-none d-lg-table-cell d-xl-table-cell' }
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


