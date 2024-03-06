import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CsvViewerModule } from './csv-viewer/csv-viewer.module';
import { CsvService } from './csv.service';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    CsvViewerModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-csv';

  csvData: string = '';

  constructor(private csvService: CsvService) { }

  ngOnInit() {
  }

  generateCsv() {
    const jsonData = [
      { id: 1, name: 'John', age: 30 },
      { id: 2, name: 'Jane', age: 25 },
      { id: 3, name: 'Doe', age: 40 },
      { id: 3, name: 'Doe', age: 40 },
      { id: 3, name: 'Doe', age: 40 },
      { id: 3, name: 'Doe', age: 40 },
      { id: 3, name: 'Doe', age: 40 },
    ];
    this.csvData = this.csvService.convertToCsv(jsonData);
  }

  createCsv() {
    const jsonData = [
      { id: 1, name: 'John', age: 30 },
      { id: 2, name: 'Jane', age: 25 },
      { id: 3, name: 'Doe', age: 40 },
      { id: 3, name: 'Doe', age: 40 },
      { id: 3, name: 'Doe', age: 40 },
      { id: 3, name: 'Doe', age: 40 },
      { id: 3, name: 'Doe', age: 40 },
    ];
    const csvData = this.csvService.convertToCsv(jsonData);
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'data.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  viewCsv() {
    this.generateCsv();
  }

  downloadCsv() {
    this.createCsv();
  }

}
