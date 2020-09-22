import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ItemsService } from './items.service';

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
  selectedItem: any;
  editItem: any;
  //  editItem: Item;

  /*  items: Item[];
    selectItem: any;
    itemsLoaded: boolean;
    itemLoaded: boolean;
    editItem: Item; */

  constructor(private itemsService: ItemsService) {
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemsLoaded = false;
    this.itemsService.getItems()
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
    this.itemsService.getItem(id)
      .subscribe(
        (data: Item) => {
          console.log('0001:' + JSON.stringify(data));
          this.item = { ...data };
          this.selectedItem = { ...data };
          this.itemLoaded = true;
        }

        /*        data => {
                  console.log('0001:' + JSON.stringify(data));
                  this.itemLoaded = true;
                  this.selectedItem = data;
                } */
      );
  }

  /*  add(name: string): void {
      this.editItem = undefined;
      name = name.trim();
      if (!name) {
        return;
      }
      const newItem: Item = { name } as Item;
      this.itemsService
        .addItem(newItem)
        .subscribe(item => this.items.push(item));
    }
    delete(item: Item): void {
      console.log('0001:' + JSON.stringify(item));
          this.items = this.items.filter(h => h !== item);
          this.itemsService
            .deleteItem(item.id)
            .subscribe();
    }
    edit(item: Item): void {
      this.editItem = item;
    }
    search(searchTerm: string): void {
      this.editItem = undefined;
      if (searchTerm) {
        this.itemsService
          .searchItems(searchTerm)
          .subscribe(items => (this.items = items));
      }
    }
    update(): void {
      if (this.editItem) {
        this.itemsService
          .updateItem(this.editItem)
          .subscribe(item => {
            const ix = item ? this.items.findIndex(h => h.id === item.id) : -1;
            if (ix > -1) {
              this.items[ix] = item;
            }
          });
        this.editItem = undefined;
      }
    } */

  onSelectItem(item: any): void {
    this.getItem(item.id);
  }

  onRead(): void {
    this.getItems();
  }

  onReset(): void {
    this.items = null;
  }


}
