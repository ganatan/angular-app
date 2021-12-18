import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-appli',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css'],
})
export class ExerciceComponent implements OnInit {


  /* exampleForm1 with FormControl only */
  name = new FormControl('');
  email = new FormControl('');
  job = new FormControl('');
  comment = new FormControl('');
  friend01 = new FormControl('');
  friend02 = new FormControl('');

  /* exampleForm2 with FormGroup & FormControl */
  exampleForm2 = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    job: new FormControl(''),
    comment: new FormControl(''),
  });

  /* exampleForm3 with Formbuilder */
  exampleForm3 = this.fb.group({
    name: [''],
    email: [''],
    job: [''],
    comment: [''],
    friends: this.fb.array([])
  });

  constructor(private fb: FormBuilder) {
    this.onResetForm1();
    this.onResetForm2();
    this.onResetForm3();
  }

  ngOnInit(): void {
  }

  /* exampleForm1 with FormControl */
  onResetForm1(): void {
    this.name.setValue('Darth Vader');
    this.email.setValue('darthvader@starwars.com');
    this.job.setValue('Sith');
    this.comment.setValue('Father of Luke Skywalker');
    this.friend01.setValue('friend01');
    this.friend02.setValue('friend02');
  }

  onSetValueForm1(): void {
    this.name.setValue('Anakin Skywalker');
    this.email.setValue('anakinskywalker@starwars.com');
    this.job.setValue('Jedi');
    this.comment.setValue('Son of Shmi Skywalker');
  }

  /* exampleForm2 with FormGroup & FormControl */
  onPatchValueForm2(): void {
    this.exampleForm2.patchValue({
      name: 'Ben solo',
      email: 'bensolo@starwars.com',
      job: 'Jedi',
      comment: 'Son of Han Solo : PatchValue'
    });
  }

  onSetValueForm2(): void {
    this.exampleForm2.setValue({
      name: 'Ben solo',
      email: 'bensolo@starwars.com',
      job: 'Jedi',
      comment: 'Son of Han Solo : SetValue'
    });
  }

  onResetForm2(): void {
    this.exampleForm2.value["name"] = 'Kylo Ren';
    this.exampleForm2.value["email"] = 'kyloren@starwars.com';
    this.exampleForm2.value["job"] = 'Sith';
    this.exampleForm2.value["comment"] = 'Killer of Han solo';
  }

  /* exampleForm3 with Formbuilder */
  get friends(): FormArray {
    return this.exampleForm3.get('friends') as FormArray;
  }

  onResetForm3(): void {
    this.exampleForm3.patchValue({
      name: 'Rey Palpatine',
      email: 'reypalpatine@starwars.com',
      job: 'Sith',
      comment: 'Granddaughter of Palpatine'
    });
    this.friends.push(this.fb.control('Finn'));
    this.friends.push(this.fb.control('Poe Damaron'));
    this.friends.push(this.fb.control('C-3PO'));
  }

  onUpdateForm3(): void {
    this.exampleForm3.patchValue({
      name: 'Rey Skywalker',
      email: 'reyskywalker@starwars.com',
      job: 'Jedi',
      comment: 'Padawan of Luke Skywalker'
    });
  }

}
