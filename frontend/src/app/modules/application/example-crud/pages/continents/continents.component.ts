import { Component, Injector } from '@angular/core';

import { PageListComponent } from '../../components/page-list/page-list.component';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.css']
})
export class ContinentsComponent extends PageListComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  override initialize(): void {

    this.endpoint = 'continents';
    this.link = 'continents';
    this.linkRoute = 'continents';

    this.placeholder = 'continents...';
    this.results = 'Continents';
    this.found = 'continents';
    this.creation = 'Continent';

    this.icon = 'fas fa-globe';
    this.itemsCount = 0;
    this.itemsPerPage = 5;

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
        title: { caption: 'Code', class: 'text-center' },
        data: { field: 'code', class: 'text-center' }
      },
      {
        title: { caption: 'Area', class: 'text-center d-none d-lg-table-cell d-xl-table-cell' },
        data: { field: 'area', class: 'text-right d-none d-lg-table-cell d-xl-table-cell' }
      },
      {
        title: { caption: 'Population', class: 'text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' },
        data: { field: 'population', class: 'text-right d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' }
      },
      {
        title: { caption: 'Countries', class: 'text-center' },
        data: { field: 'countriesNumber', class: 'text-center' }
      },
      {
        title: { caption: 'French Name', class: 'text-center d-none d-lg-table-cell d-xl-table-cell' },
        data: { field: 'frenchName', class: 'text-center d-none d-lg-table-cell d-xl-table-cell' }
      },
    ];

    super.initialize();
  }

}
