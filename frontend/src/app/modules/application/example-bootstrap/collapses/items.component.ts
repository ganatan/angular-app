import { Component, OnInit } from '@angular/core';

declare const bootstrap: any;

@Component({
  selector: 'app-collapse',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class CollapsesComponent {

  constructor() { }


  closeCollapse() {
    const myCollapse = document.getElementById('collapseWidthJavascript')
    const bsCollapse = new bootstrap.Collapse(myCollapse, {
      hide: true,
    })
  }

  showCollapse() {
    const myCollapse = document.getElementById('collapseWidthJavascript')
    const bsCollapse = new bootstrap.Collapse(myCollapse, {
      show: true,
    })
  }

  toggleCollapse() {
    const myCollapse = document.getElementById('collapseWidthJavascript')
    const bsCollapse = new bootstrap.Collapse(myCollapse, {
      toggle: true,
    })
  }

}
