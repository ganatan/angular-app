import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { Item } from './items/item';
import { Badge } from './badge';
import { ItemsService } from './items/items.service';
import { environment } from '../../../../environments/environment';

declare const bootstrap: any;

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  itemsLoaded: boolean;
  items: Item[];
  badges: Badge[];
  searchField: string;
  player: string;
  playerLoaded: boolean;
  modalPlayer: any;
  loaded: boolean;
  filtersEnabled: boolean;
  resultsFound: boolean;

  formFilters = this.fb.group({
    dateType: [1],
    fromDate: [''],
    toDate: [''],
    sortType: [1],
    show: [false],
    movie: [false],
    clip: [false],
    game: [false],
    elementsCount: [0],
  });

  constructor(
    public router: Router,
    private itemsService: ItemsService,
    private fb: FormBuilder) {

    this.loaded = false;
    this.items = [];
    this.badges = [];
    this.itemsLoaded = false;
    this.searchField = ''
    this.player = '';
    this.playerLoaded = false;
    this.filtersEnabled = false;
    this.resultsFound = false;

    this.formFilters.setValue({
      dateType: 1,
      fromDate: '',
      toDate: '',
      sortType: 1,
      show: false,
      movie: false,
      clip: false,
      game: false,
      elementsCount: 20,
    });

  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.loaded = false;
    const url = environment.urlNews;
    this.itemsService.getItems(url)
      .subscribe(
        items => {
          this.items = items;
          this.loaded = true;
        }
      );
  }

  openTrailer(item: any) {
    this.player = item.youtubeLink;
    this.playerLoaded = true;
    if (this.modalPlayer === undefined) {
      this.modalPlayer = new bootstrap.Modal(document.getElementById('newsModal'), {
        keyboard: true
      })
      const selectPlayer = document.getElementById('newsModal')
      selectPlayer?.addEventListener('hidden.bs.modal', this.onCloseModal.bind(this));
    }
    this.modalPlayer?.show();
  }

  onCloseModal() {
    this.player = '';
    this.playerLoaded = false;
  }

  onHandleKeyDown(event: any) {
    if (event.keyCode === 13) {
      this.onSearch();
    }
  }

  onSearch() {
    this.getItems();
  }

}

