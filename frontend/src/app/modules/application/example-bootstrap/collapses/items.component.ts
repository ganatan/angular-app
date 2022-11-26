import { Component } from '@angular/core';

// eslint-disable-next-line
declare const bootstrap: any;

@Component({
  selector: 'app-collapse',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class CollapsesComponent {

  closeCollapse() {
    const myCollapse = document.getElementById('collapseWidthJavascript')
    new bootstrap.Collapse(myCollapse, {
      hide: true,
    })
  }

  showCollapse() {
    const myCollapse = document.getElementById('collapseWidthJavascript')
    new bootstrap.Collapse(myCollapse, {
      show: true,
    })
  }

  toggleCollapse() {
    const myCollapse = document.getElementById('collapseWidthJavascript')
    new bootstrap.Collapse(myCollapse, {
      toggle: true,
    })
  }

}
