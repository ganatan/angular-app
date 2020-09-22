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

  item: any;
  itemLoaded: boolean;

  constructor(
    private http: HttpClient,
    private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.url = this.tutorialService.getUrl();
    this.getItems();
  }

  getItems(): void {
    this.itemsLoaded = false;
    this.http.get(this.url + this.endpoint)
      .subscribe(
        data => {
          this.items = data;
          this.itemsLoaded = true;
          this.itemLoaded = false;
          this.getItem(this.items[0].id);
        }
      );
  }

  getItem(id: any): void {
    this.itemLoaded = false;
    this.http.get(this.url + this.endpoint + '/' + id)
      .subscribe(
        data => {
          this.item = data;
          this.itemLoaded = true;
        }
      );
  }

  onSelectItem(item: any): void {
    this.getItem(item.id);
  }

  onRead(): void {
    this.getItems();
  }

  onReset(): void {
    this.items = null;
    this.item = null;
  }

}
