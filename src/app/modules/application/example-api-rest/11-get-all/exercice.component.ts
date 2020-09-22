import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-prototype',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {

  url: string;
  endpoint = '/movies';

  items: any;
  itemsLoaded: boolean;

  constructor(
    private http: HttpClient,
    private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemsLoaded = false;
    this.url = this.tutorialService.getUrl();
    this.http.get(this.url + this.endpoint)
      .subscribe(
        data => {
          this.items = data;
          this.itemsLoaded = true;
        }
      );
  }

  onRead(): void {
    this.getItems();
  }

  onReset(): void {
    this.items = null;
  }

}
