import { Component, OnInit } from '@angular/core';

import { Song } from './song/song';

import { SongService } from './song/song.service';

@Component({
  selector: 'app-example-services',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  songs: Song[];
  songSelected: Song;
  yearSelected: number;

  constructor(private songService: SongService) {
    this.songs = [];
    this.yearSelected = 3;
    this.songs = this.songService.getSongs(this.yearSelected);
    this.songSelected = new Song();
    this.songSelected = this.songs[0];
  }

  ngOnInit(): void {
    this.getSongs(this.yearSelected);
  }

  getSongs(year: number): void {
    this.songs = this.songService.getSongs(year);
  }

  select(song: Song): void {
    this.songSelected = song;
  }

  onChangeYear($event: any): void {
    this.yearSelected = $event.target.value;
    this.songs = this.songService.getSongs(this.yearSelected);
    this.songSelected = new Song();
    this.songSelected = this.songs[0];
  }

}
