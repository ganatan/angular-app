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
    //    text: '<pre><code class="language-css">p { color: red }</code></pre>',
    text: 'console.log("0001");',
    languagecode: 'javascript'
  }

  constructor(@Inject(PLATFORM_ID) private platformId: object,) {
  }

  ngOnInit(): void {
    //    this.loadScript('assets/params/js/prism.js');
    this.loadScript('assets/params/js/prism.min.js');
  }

  openModal() {
  }

  loadScript(name: string): void {

    if (isPlatformBrowser(this.platformId)) {
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = name;
      s.async = false;
      document.getElementsByTagName('head')[0].appendChild(s);
    }
  }


}
