import { Injectable } from '@angular/core';

import { Song } from './song';
import { SONGS } from './mock-songs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  song: Song[];
  constructor() {
    this.song = [];
   }

  getSongs(year: number): Song[] {
    this.song = SONGS[year - 1].items;
    return this.song;
  }

}
