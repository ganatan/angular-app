import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemsService } from './items.service';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-youtube-search';

  items: any[];
  searchInput: string;
  url: string;

  constructor(private itemsService: ItemsService) {
    this.items = [];
    this.searchInput = 'dune trailer';
    this.url = '';
  }

  search() {
    const input = this.searchInput.replace(new RegExp(' ', 'g'), '%20');
    // !!!!!!! change with API Google Key !!!!!!! 
    const key = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
    let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5';
    url += `&q=${input}`;
    url += '&type=video&order=relevance';
    url += `&key=${key}`;
    url += '&prettyPrint=fa';
    this.url = url;
    this.itemsService.getItems(url)
      .subscribe(res => {
        const results = res['items'];
        if (results !== undefined) {
          const items: any[] = [];
          results.forEach((param1: any) => {
            const id = param1['id']['videoId'];
            const title = param1['snippet']['title'];
            const description = param1['snippet']['description'];
            items.push(
              { id: id, title: title, description: description }
            );
          });
          this.items = items;
        }
      });
  }

}
