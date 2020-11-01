import { Component, OnInit } from '@angular/core';

import { showmessage } from './showmessage';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {
  result: string;

  ngOnInit(): void {
    this.result = 'Call function' + showmessage('param1');
  }

}
