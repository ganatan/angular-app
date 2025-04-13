import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PrettyJsonPipe } from './pretty-json.pipe';

@Component({
  selector: 'app-form-array',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PrettyJsonPipe],
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css'],
})
export class ExerciceComponent implements OnInit {
  exampleForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.exampleForm = this.fb.group({
      name: [''],
      releaseDate: [''],
      characters: this.fb.array([
        this.fb.control('Iron Man'),
        this.fb.control('Thanos'),
        this.fb.control('Hulk'),
        this.fb.control('Captain America'),
      ])
    });
  }

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
