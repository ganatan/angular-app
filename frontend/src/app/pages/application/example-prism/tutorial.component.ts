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

  element = [{
    text: 'console.log("0001");',
    languagecode: 'javascript'
  }]

  constructor(@Inject(PLATFORM_ID) private platformId: object,) {

    this.element = [
      {
        text: `
if (typeof monObjet.methode === 'function') {
  monObjet.methode();
} else if (typeof monObjet.methode2 === 'function') {
  monObjet.methode2();
}`,
        languagecode: 'javascript'
      },
      {
        text: `
switch(nombre){
  //case traditionnel
  case 5:
    System.out.println("La variable est égale à 5");
    break;
  //nouveau case
  case 5 -> System.out.println("La variable est égale à 5");
}`,
        languagecode: 'java'
      },
      {
        text: `
def accum(pas):
  total = 0
  def ajoute(n):
    nonlocal total
    total += n * pas
    return total
  return ajoute      
}`,
        languagecode: 'python'
      },
      {
        text: `
# Désinstallez Angular CLI
npm uninstall -g @angular/cli
        
# Installez Angular CLI 
npm install -g @angular/cli@15.0.4
}`,
        languagecode: 'git'
      },
      {
        text: `
"dependencies": {
  "@angular/animations": "15.0.4",
  "@angular/common": "15.0.4",
  "@angular/compiler": "15.0.4",
  "zone.js": "0.12.0"
},      
`,
        languagecode: 'json'
      },
      {
        text: `
user www-data;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;
        
events {
  worker_connections 768;
}      
`,
        languagecode: 'nginx'
      },
    ]

  }

  ngOnInit(): void {
    this.loadScript('assets/params/js/prism.js');
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
