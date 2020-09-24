import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {

  @Input() searchField: any;
  @Input() creation: any;
  @Input() found: any;
  @Input() link: any;

  constructor(public router: Router) { }

  createItem(): void {
    this.router.navigate(['/crud/' + this.link, 0]);
  }

}
