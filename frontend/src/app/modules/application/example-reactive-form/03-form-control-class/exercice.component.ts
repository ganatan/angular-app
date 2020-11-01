import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Movie } from './movie';

@Component({
  selector: 'app-form-control-class',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css'],
})
export class ExerciceComponent implements OnInit {

  name = new FormControl('');
  releaseDate = new FormControl('');
  franchise = new FormControl('');
  budget = new FormControl('');
  worldwide = new FormControl('');
  summary = new FormControl('');

  movie: Movie;

  constructor() {
    this.movie = new Movie();
  }

  ngOnInit(): void {
    this.updateControls();
  }

  updateClass(): void {
    this.movie.name = 'Avengers: Endgame';
    this.movie.releaseDate = '26/04/2019';
    this.movie.franchise = true;
    this.movie.budget = 356000000;
    this.movie.worldwide = 2797800564;
    this.movie.summary = 'After the devastating events of Avengers: Infinity War (2018), ' +
      'the universe is in ruins.';
  }

  updateControls(): void {
    this.updateClass();
    this.name.setValue(this.movie.name);
    this.releaseDate.setValue(this.movie.releaseDate);
    this.franchise.setValue(this.movie.franchise);
    this.budget.setValue(this.movie.budget);
    this.worldwide.setValue(this.movie.worldwide);
    this.summary.setValue(this.movie.summary);
  }

  resetControls(): void {
    this.name.setValue(null);
    this.releaseDate.setValue(null);
    this.franchise.setValue(null);
    this.budget.setValue(null);
    this.worldwide.setValue(null);
    this.summary.setValue(null);
  }

  getClass(): void {
    this.movie.name = this.name.value;
    this.movie.releaseDate = this.releaseDate.value;
    this.movie.franchise = this.franchise.value;
    this.movie.budget = this.budget.value;
    this.movie.worldwide = this.worldwide.value;
    this.movie.summary = this.summary.value;
  }

}
