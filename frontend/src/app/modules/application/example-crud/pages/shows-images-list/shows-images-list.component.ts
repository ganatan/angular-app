import { Component, OnInit, Injector } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { PageListComponent } from '../../components/page-list/page-list.component';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-images-list.component.html',
  styleUrls: ['./shows-images-list.component.css']
})
export class ShowsImagesListComponent extends PageListComponent implements OnInit {

  constructor(
    private meta: Meta,
    private titleService: Title,
    injector: Injector) {

    super(injector);

  }

  initialize(): void {

    this.endpoint = 'shows';
    this.link = 'shows';
    this.placeholder = 'shows...';
    this.results = 'Shows';
    this.found = 'shows';
    this.creation = 'Show';
    this.loaded = false;
    this.icon = 'fas fa-laptop';
    this.itemsCount = 0;
    this.itemsPerPage = 24;
    this.linkRoute = 'shows-images';

    this.columns = [
      { name: 'Id', field: 'id', align: 'left', color: 'black', font: '' },
      { name: 'Name', field: 'name', align: 'left', color: 'text-primary', font: 'bold' },
      { name: 'Date', field: 'releaseDate', align: 'center', color: 'text-primary', font: '' },
    ];

    super.initialize();
  }

  ngOnInit(): void {
    this.titleService.setTitle('New TV Shows : angular.ganatan');
    this.meta.addTag({
      name: 'angular.ganatan',
      content: 'danny ganatan'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'All the new TV Shows'
      });
  }

  selectItem(id: any): void {
    this.router.navigate(['/crud/' + this.link, id]);
  }

}
