import { Component } from '@angular/core';
import { Movie } from './movie';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercice',
  imports: [CommonModule, FormsModule],
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent {

  movie: Movie = new Movie();

  constructor() {
    this.movie.name = 'Avengers : Endgame';
    this.movie.releaseDate = '04/04/2019';
    this.movie.domestic = '$858,373,000';
    this.movie.international = '$2,797,800,564';
    this.movie.worldwide = '$2,797,800,564';
    this.movie.franchise = true;
  }

}
