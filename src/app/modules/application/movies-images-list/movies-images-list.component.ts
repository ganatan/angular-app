import { Component, OnInit, Injector } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { PageListComponent } from '../../../components/page-list/page-list.component';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-images-list.component.html',
  styleUrls: ['./movies-images-list.component.css']
})
export class MoviesImagesListComponent extends PageListComponent implements OnInit {

  constructor(
    private meta: Meta,
    private titleService: Title,
    injector: Injector) {

    super(injector);

  }

  initialize() {

    this.endpoint = 'movies';
    this.link = 'movies';
    this.placeholder = 'movies...';
    this.results = 'Movies';
    this.found = 'movies';
    this.creation = 'Movie';
    this.loaded = false;
    this.icon = 'fas fa-film';
    this.itemsCount = 0;
    this.itemsPerPage = 12;
    this.linkRoute = 'movies-images';

    this.columns = [
      { name: 'Id', field: 'id', align: 'left', color: 'black', font: '' },
      { name: 'Name', field: 'name', align: 'left', color: 'text-primary', font: 'bold' },
      { name: 'Date', field: 'releaseDate', align: 'center', color: 'text-primary', font: '' },
    ];

    super.initialize();
  }

  ngOnInit() {
    this.titleService.setTitle('New Movies: angular.ganatan');
    this.meta.addTag({
      name: 'angular.ganatan',
      content: 'danny ganatan'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'All the new movies'
      });
  }

  selectItem(id: any) {
    this.router.navigate(['/' + this.link, id]);
  }

}
