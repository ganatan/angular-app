import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../../services/seo/seo.service';

import { Channel } from './channel/channel';

@Component({
  selector: 'app-example-components',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  channels: Channel[];
  channelSelected: Channel;

  constructor(private seoService: SeoService) {

    const content = 'Example Components content with meta';
    this.seoService.setMetaDescription(content);

    this.seoService.setMetaTitle('angular-starter Title : example-components Page');

    this.channelSelected = new Channel();
    this.channels =
      [
        { title: 'Disney Channel', name: 'disney-channel', releaseDate: '22/03/1997' },
        { title: 'FOX', name: 'fox', releaseDate: '09/10/1986' },
        { title: 'Discovery Channel', name: 'discovery-channel', releaseDate: '17/06/1985' },
        { title: 'HBO', name: 'hbo', releaseDate: '08/11/1972' },
        { title: 'History', name: 'history', releaseDate: '01/01/1995' },
        { title: 'Hulu', name: 'hulu', releaseDate: '29/03/2007' },
        { title: 'MTV', name: 'mtv', releaseDate: '01/08/1981' },
        { title: 'NBC', name: 'nbc', releaseDate: '01/07/1941' },
        { title: 'Netflix', name: 'netflix', releaseDate: '29/08/1997' },
        { title: 'Showtime', name: 'showtime', releaseDate: '09/05/1976' },
        { title: 'USA Nnetwork', name: 'usa-network', releaseDate: '22/09/1977' },
      ];
  }

  ngOnInit(): void {
    this.channelSelected = this.channels[0];
  }

  onSelected(event: any): void {
    this.channelSelected = event;
  }

  onReset(): void {
    this.channelSelected = new Channel();
  }

}
