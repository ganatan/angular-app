import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PrettyJsonPipe } from './pretty-json.pipe';

@Component({
  selector: 'app-form-builder',
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
      franchise: [false],
      budget: [0],
      worldwide: [0],
      summary: [''],
    });

  }


  ngOnInit(): void {
    this.updateControls();
  }

  updateControls(): void {
    this.exampleForm.patchValue({
      name: 'Avengers: Endgame',
      releaseDate: '26/04/2019',
      franchise: true,
      budget: 356000000,
      worldwide: 2797800564,
      summary: 'After the devastating events of Avengers: Infinity War (2018), ' +
        'the universe is in ruins.'
    });
  }

  resetControls(): void {
    this.exampleForm.patchValue({
      name: null,
      releaseDate: null,
      franchise: true,
      budget: null,
      worldwide: null,
      summary: null,
    });
  }

  resetFranchise(): void {
    const franchise = !(this.exampleForm.value['franchise']);
    this.exampleForm.patchValue({ franchise: franchise });
  }

}
