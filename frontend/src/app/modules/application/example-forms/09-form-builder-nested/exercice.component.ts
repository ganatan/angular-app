import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-builder-nested',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css'],
})
export class ExerciceComponent implements OnInit {

  exampleForm = this.fb.group({
    name: [''],
    releaseDate: [''],
    franchise: [false],
    summary: [''],
    boxoffice: this.fb.group({
      budget: [0],
      worldwide: [0],
      international: [0],
      domestic: [0],
    }),

  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.updateControls();
  }

  updateControls(): void {
    this.exampleForm.patchValue({
      name: 'Avengers: Endgame',
      releaseDate: '26/04/2019',
      franchise: true,
      summary: 'After the devastating events of Avengers: Infinity War (2018), ' +
        'the universe is in ruins.',
      boxoffice: {
        budget: 356000000,
        worldwide: 2797800564,
        domestic: 858373000,
        international: 1939427564
      }
    });
  }

  resetControls(): void {
    this.exampleForm.patchValue({
      name: null,
      releaseDate: null,
      franchise: false,
      summary: null,
      boxoffice: {
        budget: null,
        worldwide: null,
        domestic: null,
        international: null
      }
    });
  }

}
