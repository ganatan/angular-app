import { Component, OnInit } from '@angular/core';

import { Movie } from './movie';
import { Show } from './show';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css'],
})
export class ExerciceComponent implements OnInit {

  movie: Movie;
  show: Show;

  constructor() {
    this.movie = new Movie();
    this.movie.name = 'Gladiator';
    this.movie.changeName();

    this.show = new Show();
    this.show.name = 'Game of Thrones';
    this.show.changeName();
  }

  ngOnInit(): void {
  }

}
