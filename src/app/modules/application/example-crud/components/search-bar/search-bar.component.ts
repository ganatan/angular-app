import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @ViewChild('edit', { static: false }) edit: ElementRef;

  @Input() searchField: any;
  @Input() placeholder: any;
  @Input() results: any;
  @Input() itemsCount: any;
  @Input() icon: any;

  @Output() search = new EventEmitter<string>();

  constructor() { }

  searching(): void {
    this.search.emit(this.edit.nativeElement.value);
  }

}
