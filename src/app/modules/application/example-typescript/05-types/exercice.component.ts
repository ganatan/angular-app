import { Component, OnInit } from '@angular/core';

enum Color { Red, Green, Blue }
enum LogLevel {
  ERROR, WARN, INFO, DEBUG
}

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {



  /*  Boolean
    Number
    String
    Array
    Tuple
    Enum
    Any
    Void
    Null and Undefined
    Never
    Object
    Type assertions */

  franchise = false;
  boolean: boolean;

  decimal: number;
  hex: number;
  binary: number;
  octal: number;
  color: string;

  list: number[];
  listMovie: string[];

  log: LogLevel;

  constructor() {
    this.boolean = false;

    this.decimal = 6;
    this.hex = 0xf00d;
    this.binary = 0b1010;
    this.octal = 0o744;
    this.color = 'red';
    this.list = [1, 2, 3];
    this.listMovie = ['1', '2', '3'];

    this.log = LogLevel.DEBUG;

  }

  ngOnInit(): void {
  }

}
