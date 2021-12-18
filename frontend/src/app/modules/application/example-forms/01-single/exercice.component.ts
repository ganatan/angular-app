import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {

  firstName = 'Paul';
  lastName = 'Atreides';

  constructor() {
  }

  ngOnInit(): void {
  }

}
