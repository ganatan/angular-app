import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popovers',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class PopoversComponent implements OnInit {

  ngOnInit(): void {
    this.loadScript('./assets/params/js/popovers.js');
  }

  loadScript(name: string): void {
    const src = document.createElement('script');
    src.type = 'text/javascript';
    src.src = name;
    src.async = false;
    document.getElementsByTagName('head')[0].appendChild(src);
  }

}
