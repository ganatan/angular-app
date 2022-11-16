import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-example-modal',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TutorialComponent implements OnInit {

  element = {
    text: 'console.log("0001");',
    languagecode: 'javascript'
  }

  constructor(@Inject(PLATFORM_ID) private platformId: object,) {
  }

  ngOnInit(): void {
    this.loadScript('assets/params/js/prism.js');
  }

  openModal() {
  }

  loadScript(name: string): void {

    if (isPlatformBrowser(this.platformId)) {
      const src = document.createElement('script');
      src.type = 'text/javascript';
      src.src = name;
      src.async = false;
      document.getElementsByTagName('head')[0].appendChild(src);
    }
  }


}
