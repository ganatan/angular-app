import { Component } from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent {

  country: string;
  actor: string;
  movie: Movie = new Movie();
  movieAny = { name: '' };

  constructor() {
    this.country = 'United States';
    this.actor = 'Tom Cruise';
    this.movie.name = 'Edge of Tomorrow';
    this.movieAny = { name: 'Avatar' };
  }

}
