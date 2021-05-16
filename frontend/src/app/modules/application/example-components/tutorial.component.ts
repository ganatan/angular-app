import { Component, OnInit } from '@angular/core';

import { Smartphone } from './smartphone/smartphone';

@Component({
  selector: 'app-example-components',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  smartphones: Smartphone[];
  smartphoneSelected: Smartphone;

  constructor() {
    this.smartphones =
      [
        { name: 'iPhone 3G', model: 'Apple', prize: '560', year: '2008' },
        { name: 'iPhone 4', model: 'Apple', prize: '560', year: '2010' },
        { name: 'iPhone 5', model: 'Apple', prize: '560', year: '2012' },
        { name: 'iPhone 6', model: 'Apple', prize: '560', year: '2014' },
        { name: 'iPhone 7', model: 'Apple', prize: '560', year: '2016' },
        { name: 'iPhone X', model: 'Apple', prize: '560', year: '2017' },
        { name: 'iPhone XS', model: 'Apple', prize: '560', year: '2018' },
        { name: 'iPhone 8', model: 'Apple', prize: '560', year: '2017' },
        { name: 'iPhone XR', model: 'Apple', prize: '560', year: '2018' },
        { name: 'iPhone 11', model: 'Apple', prize: '560', year: '2019' },
      ];
      this.smartphoneSelected = this.smartphones[0];
  }

  ngOnInit(): void {
  }

  onSelected(event: any): void {
    this.smartphoneSelected = event;
  }

  onReset(): void {
    this.smartphoneSelected = this.smartphones[0];
  }

}
