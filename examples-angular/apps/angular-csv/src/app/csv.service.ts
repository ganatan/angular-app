import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  constructor() { }

  convertToCsv(data: any[]): string {
    const keys = Object.keys(data[0]);
    const header = keys.join(',') + '\n';
    const rows = data.map(row => {
      return keys.map(key => row[key]).join(',');
    }).join('\n');
    return header + rows;
  }
}