import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css'],
})
export class ExerciceComponent implements OnInit {

  exampleForm = this.fb.group({
    name: [''],
    releaseDate: [''],
    characters: this.fb.array([
      this.fb.control('Iron Man'),
      this.fb.control('Thanos'),
      this.fb.control('Hulk'),
      this.fb.control('Captain America'),
    ])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.exampleForm.patchValue({
      name: 'Avengers: Endgame',
      releaseDate: '26/04/2019',
    });
  }

  addCharacter(): void {
    this.characters.push(this.fb.control('New Character'));
  }

  get characters(): FormArray {
    return this.exampleForm.get('characters') as FormArray;
  }

  updateControls(): void {
    this.exampleForm.patchValue({
      name: 'Avengers: Endgame patchValue',
      releaseDate: '26/04/2019 patchValue',
    });
  }

  resetControls(): void {
    this.exampleForm.patchValue({
      name: null,
      releaseDate: null,
    });
  }

}
