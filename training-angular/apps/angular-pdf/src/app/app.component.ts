import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PdfService } from './pdf.service';

@Component({
  standalone: true,
  imports: [
    RouterModule
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-pdf';

  constructor(private pdfService: PdfService) {
  }

  print() {
    const items = [
      { name: '1111' },
      { name: '2222' },
      { name: '3333' },
      { name: '4444' },
    ];
    const pdfBlob = this.pdfService.print(items);
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, '_blank');
  }

  printArray() {
    const items = [
      {
        name: '1111',
        value: 'aaaa',
        type: 'xxxx',
        name01: '1111',
        value01: 'aaaa',
        type01: 'xxxx',
        name02: '1111',
        value02: 'aaaa',
        type02: 'xxxx',
        name03: '1111',
        value03: 'aaaa',
        type03: 'xxxx'
      },
      {
        name: '2222',
        value: 'bbbb',
        type: 'xxxx',
        name01: '2222',
        value01: 'bbbb',
        type01: 'xxxx',
        name02: '2222',
        value02: 'bbbb',
        type02: 'xxxx',
        name03: '2222',
        value03: 'bbbb',
        type03: 'xxxx'
      },
    ];
    const pdfBlob = this.pdfService.printArray(items);
    if (pdfBlob !== null) {
      const pdfUrl = URL.createObjectURL(pdfBlob);
      window.open(pdfUrl, '_blank');
    }
  }

}
