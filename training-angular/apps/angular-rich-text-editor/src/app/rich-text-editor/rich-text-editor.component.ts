import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.css'],
})
export class RichTextEditorComponent implements OnInit, AfterViewInit {
  @Input() name: string | undefined;
  @Input() value: string | undefined;

  @ViewChild('myDiv') myDivElement: ElementRef | undefined;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    /*
    console.log('00000000001');
    const editor = this.document.getElementById('aaaa');
    if (editor) {
      console.log('00000000002');
       editor.innerHTML = '<p>ligne1<br />ligne2<br />ligne3<br />ligne4<br /></p>';
    }

    console.log('00000000001');
    const editor02 = this.document.getElementById('bbbb');
    if (editor02) {
      console.log('00000000002');
      editor02.innerHTML = '<p>ligne1<br />ligne2<br />ligne3<br />ligne4<br /></p>';
    }
      */
  }

  ngAfterViewInit() {
    if (this.myDivElement) {
      let value = this.value;
      //       this.myDivElement.nativeElement.textContent = value;

      //const editor02 = this.document.getElementById('bbbb');
      //if (editor02) {
      console.log('00000000002:' + this.myDivElement);
      //this.myDivElement.nativeElement.innerHTML = '<p>ligne1<br />ligne2<br />ligne3<br />ligne4<br /></p>';
      this.myDivElement.nativeElement.innerHTML = value;
      // }


    } else {
      console.error('myDivElement is undefined');
    }
  }

}
