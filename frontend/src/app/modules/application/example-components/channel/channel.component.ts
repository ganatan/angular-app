import { Component, EventEmitter, Output, Input } from '@angular/core';

import { Channel } from './channel';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent {

  @Input() channel: Channel;
  @Input() index: number;
  @Output() selected: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.channel = new Channel();
    this.index = 0;
  }

  select(channel: Channel): void {
    this.selected.emit(channel);
  }

}
