import { Component, OnInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-collapse',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class CollapsesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  closeCollapse() {
    var myCollapse = document.getElementById('collapseWidthJavascript')
    var bsCollapse = new bootstrap.Collapse(myCollapse, {
      hide: true,
    })
  }

  showCollapse() {
    var myCollapse = document.getElementById('collapseWidthJavascript')
    var bsCollapse = new bootstrap.Collapse(myCollapse, {
      show: true,
    })
  }

  toggleCollapse() {
    var myCollapse = document.getElementById('collapseWidthJavascript')
    var bsCollapse = new bootstrap.Collapse(myCollapse, {
      toggle: true,
    })
  }

}
