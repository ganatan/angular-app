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

  createPdf() {
    const pdfBlob = this.pdfService.generatePDF();
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, '_blank'); 
  }

}
