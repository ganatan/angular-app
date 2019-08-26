import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  data = [];

  constructor() {

    this.data = [
      {
        caption: 'Items List',
        name: 'continents-list',
        link: 'continents',
        icon: 'fas fa-list',
        items: [
          { name: 'Continents', link: 'continents', icon: 'fas fa-globe' },
          { name: 'Countries', link: 'countries', icon: 'far fa-flag' },
          { name: 'Cities', link: 'cities', icon: 'fas fa-city' },
          { name: 'Shows', link: 'shows', icon: 'fas fa-laptop' },
          { name: 'Movies', link: 'movies', icon: 'fas fa-film' }
        ]
      },
      {
        caption: 'Images List',
        name: 'countries-list',
        link: 'countries',
        icon: 'fas fa-images',
        items: [
          { name: 'Shows', link: 'shows-images', icon: 'fas fa-laptop' },
          { name: 'Movies', link: 'movies-images', icon: 'fas fa-film' }
        ]
      },
    ];

  }

}
