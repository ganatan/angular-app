import { Component, OnInit } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  features: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private meta: Meta,
    private titleService: Title) {
  }

  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      const navMain = document.getElementById('navbarCollapse');
      if (navMain) {
        navMain.onclick = function onClick() {
          if (navMain) {
            navMain.classList.remove("show");
          }
        }
      }
    }

    this.titleService.setTitle('angular.ganatan.com : An Angular Application Web');
    this.meta.addTag({
      name: 'author',
      content: 'danny ganatan'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'This application was developed with Angular version 13.3.0 and bootstrap 5.1.3' +
          ' It applies Routing, Lazy loading, Server side rendering and Progressive Web App (PWA)'
      });
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

