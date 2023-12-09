import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { Item } from './items/item';
import { ItemsService } from './items/items.service';
import { environment } from '../../../../environments/environment';

// eslint-disable-next-line
declare const bootstrap: any;

@Component({
  selector: 'app-boxoffice',
  templateUrl: './boxoffice.component.html',
  styleUrls: ['./boxoffice.component.css']
})
export class BoxofficeComponent implements OnInit {
  itemsLoaded: boolean;
  items: Item[];
  player: string;
  playerLoaded: boolean;
  // eslint-disable-next-line
  modalPlayer: any;

  formFilter = this.fb.group({
    shows: [true],
    movies: [true],
    clips: [true],
    games: [true],
  });

  constructor(
    public router: Router,
    private itemsService: ItemsService,
    private fb: FormBuilder) {

    this.player = '';
    this.playerLoaded = false;

    this.items = [];
    this.itemsLoaded = false;

    this.formFilter.setValue({
      shows: true,
      movies: true,
      clips: true,
      games: true,
    });

  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): any {
    const url = environment.urlMovies;
    this.itemsService.getItems(url)
      .subscribe(
        items => {
          this.itemsLoaded = true;
          this.items = items;
        }
      );
  }

  onSelectItemTrailer(item: any) {
    this.player = item.youtubeLink;
    this.playerLoaded = true;
    if (this.modalPlayer === undefined) {
      this.modalPlayer = new bootstrap.Modal(document.getElementById('exampleModal'), {
        keyboard: true
      })
      const selectPlayer = document.getElementById('exampleModal')
      selectPlayer?.addEventListener('hidden.bs.modal', this.onCloseModal.bind(this));
    }
    this.modalPlayer?.show();
  }

  onCloseModal() {
    this.player = '';
    this.playerLoaded = false;
  }

  addItem() {
    this.router.navigate(['/movies', 0]);
  }

}
