import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

import { SeoService } from '../../../services/seo/seo.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  features: any;

  constructor(
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: object) {

    this.features =
      [
        {
          type: 'CRUD',
          description: 'CRUD , API Rest, Components, Pages, Extends',
          image: 'demo-responsive-images-list.png',
          link: 'crud'
        },
        {
          type: 'Services',
          description: 'Use services to view a playlist and a youtube player',
          image: 'demo-services-playlist-youtube.png',
          link: 'services'
        },
        {
          type: 'Components',
          description: 'Channel Component with Input, Output and Event Emitter',
          image: 'demo-components.png',
          link: 'components'
        },
        {
          type: 'HttpClient',
          description: 'Use an external API with the HttpClient module',
          image: 'demo-httpclient.png',
          link: 'httpclient'
        },
        {
          type: 'Reactive Form',
          description: 'A model-driven approach to handling form inputs',
          image: 'demo-reactive-forms.png',
          link: 'forms'
        },
        {
          type: 'Template Driven Forms',
          description: 'Forms are the mainstay of business applications',
          image: 'demo-template-driven-forms.png',
          link: 'forms'
        },
        {
          type: 'Modal',
          description: 'How to implement modal windows with Angular and Bootstrap',
          image: 'demo-template-driven-forms.png',
          link: 'modal'
        },
        {
          type: 'Prism',
          description: 'Use a lightweight, extensible syntax highlighter',
          image: 'demo-template-driven-forms.png',
          link: 'prism'
        },
      ];

  }

  ngOnInit(): void {

    const content =
      'Cette application a été développée avec Angular version 14.2.4 et bootstrap 5.2.1' +
      ' Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)';

    const title = 'angular-starter Title : Angular Page';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

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

