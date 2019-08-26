import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-images',
  templateUrl: './grid-images.component.html',
  styleUrls: ['./grid-images.component.css']
})
export class GridImagesComponent {

  @Input() items: any;
  @Input() columns: any;
  @Input() link: any;
  @Input() filter: any;
  @Input() itemsCount: any;
  @Input() pagination: any;

  constructor(public router: Router) { }

  selectItem(id: any) {
    this.router.navigate(['/' + this.link, id]);
  }

}
