import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-boxoffice-form',
  templateUrl: './boxoffice-form.component.html',
  styleUrls: ['./boxoffice-form.component.css'],
})
export class BoxofficeFormComponent implements OnInit {
  exampleForm = this.fb.group({
    name: [''],
    releaseDate: [''],
    franchise: [true],
    budget: [0],
    worldwide: [0],
    summary: [''],
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
