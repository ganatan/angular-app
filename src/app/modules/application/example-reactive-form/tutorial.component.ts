import { Component } from '@angular/core';

@Component({
  selector: 'app-example-reactive-form',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent {

  current = 1;
  features = [
    { id: 1, name: 'Prototype', link: 'prototype' },
    { id: 2, name: 'FormControl', link: 'form-control' },
    { id: 3, name: 'FormControl Class', link: 'form-control-class' },
    { id: 4, name: 'FormGroup', link: 'form-group' },
    { id: 5, name: 'FormBuilder', link: 'form-builder' },
    { id: 6, name: 'FormBuilder Nested', link: 'form-builder-nested' },
    { id: 7, name: 'FormArray', link: 'form-array' },
    { id: 8, name: 'FormMulti', link: 'form-multi' },
  ];

  changeItem(item: any) {
    this.current = item.id;
  }

}
