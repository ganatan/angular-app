import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  items = [];

  constructor() {
    this.items = [
      {
        caption: 'Movies Images',
        link: 'movies-images',
        theme: 'fas fa-images',
        icon: 'fas fa-film',
        description : 'List of Movies with poster'
      },
      {
        caption: 'Shows Images',
        link: 'shows-images',
        theme: 'fas fa-images',
        icon: 'fas fa-laptop',
        description : 'List of shows with poster'
      },
      {
        caption: 'Movies',
        link: 'movies',
        theme: 'fas fa-list',
        icon: 'fas fa-film',
        description : 'List of movies with search and pagination'
      },
      {
        caption: 'Shows',
        link: 'shows',
        theme: 'fas fa-list',
        icon: 'fas fa-laptop',
        description : 'List of shows with search and pagination'
      },
      {
        caption: 'Continents',
        link: 'continents',
        theme: 'fas fa-list',
        icon: 'fas fa-globe',
        description : 'List of continents with search and pagination'
      },
      {
        caption: 'Countries',
        link: 'countries',
        theme: 'fas fa-list',
        icon: 'far fa-flag',
        description : 'List of countries with search and pagination'
      },
      {
        caption: 'Cities',
        link: 'cities',
        theme: 'fas fa-list',
        icon: 'fas fa-city',
        description : 'List of cities with search and pagination'
      },
    ];
  }

}
