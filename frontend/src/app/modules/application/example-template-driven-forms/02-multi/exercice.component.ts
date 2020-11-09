import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {

  country: any;
  actor: string;
  movie: Movie = new Movie();
  movieAny: any;

  constructor() {
    this.country = 'United States';
    this.actor = 'Tom Cruise';
    this.movie.name = 'Edge of Tomorrow';
    this.movieAny = { name: 'Avatar' };
  }

  ngOnInit(): void {
  }

}
