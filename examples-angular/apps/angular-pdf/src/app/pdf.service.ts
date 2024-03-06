
import { Injectable } from '@angular/core';

import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  print(items: any) {
    const doc = new jsPDF.default();
    const xx = 10;
    let yy = 10;
    items.forEach((element: any) => {
      const name = element['name'];
      doc.text(name, xx, yy);
      yy += 10;
    });
    const pdfBlob = doc.output('blob');

    return pdfBlob;
  }


  printArray(items: any) {
    const doc = new jsPDF.default();
    const headers = Object.keys(items[0]);
    const tableData = items.map((element: any) => Object.values(element));
    doc.autoTable({
      head: [headers],
      body: tableData
    });
    const pdfBlob = doc.output('blob');
    
    return pdfBlob;
  }

}