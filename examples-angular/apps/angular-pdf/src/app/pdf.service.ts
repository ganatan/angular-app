
import { Injectable } from '@angular/core';
import * as jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() {
  }

  generatePDF() {
    /*
    const doc = new jsPDF.default(); 
    doc.text('Hello world!', 10, 10);
    doc.save('test.pdf');
    */
    const doc = new jsPDF.default();
    doc.text('Hello world!', 10, 10);
    const pdfBlob = doc.output('blob');
    return pdfBlob;   
  }
}