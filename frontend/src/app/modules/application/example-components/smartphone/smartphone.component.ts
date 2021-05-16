import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

import { Smartphone } from './smartphone';

@Component({
  selector: 'app-smartphone',
  templateUrl: './smartphone.component.html',
  styleUrls: ['./smartphone.component.css']
})
export class SmartphoneComponent implements OnInit {

  @Input() smartphone: Smartphone;
  @Input() index: number;
  @Output() selected: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.smartphone = new Smartphone;
    this.index = 1;
  }

  ngOnInit(): void {
  }

  select(smartphone: Smartphone): void {
    this.selected.emit(smartphone);
  }

}
