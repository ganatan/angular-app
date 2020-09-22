import { Component, OnInit } from '@angular/core';
// import { Item } from './item.service';
import { ItemService } from './item.service';
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
    private itemService: ItemService,
    private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.url = this.tutorialService.getUrl();
    this.getItems();
  }

  getItems(): void {
    this.itemsLoaded = false;
    this.itemService.getItems(this.url + this.endpoint)
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
    this.itemService.getItem(this.url + this.endpoint + '/' + id)
      .subscribe(
        /*        (data: Item) => {
                  this.item = { ...data };
                  this.itemLoaded = true;
                } */
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
