import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-csv-viewer',
  templateUrl: './csv-viewer.component.html',
  styleUrls: ['./csv-viewer.component.css'],
})
export class CsvViewerComponent {

  @Input() csvData: any | undefined;
  constructor() { }

}
