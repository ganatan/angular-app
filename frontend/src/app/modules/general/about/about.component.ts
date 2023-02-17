import { Component, Inject, OnInit } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';

import { Quote } from './quote';

import { SeoService } from '../../../services/seo/seo.service';
import { Feature } from './feature';
import { Dependency } from './dependency';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  dependencies: Dependency;
  features: Feature;
  quote: Quote;
  id: number;

  constructor(
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: object) {

    const content = 'About content with meta';
    this.seoService.setMetaDescription(content);

    this.id = 0;
    this.quote = new Quote();
    this.dependencies = {
      frontend: [
        { name: 'Angular 15.1.5' },
        { name: 'Angular CLI 15.1.6' },
        { name: 'Angular Universal 15.1.0' },
        { name: 'Bootstrap 5.2.3' },
        { name: 'Font Awesome 6.2.1' },
      ],
      backend: [
        { name: 'Node.js 16.15.0' },
        { name: 'Express 4.18.1' },
        { name: 'pg-promise 10.10.2' },
      ]
    };

    this.features = {
      frontend: [
        {
          name: 'Angular CLI',
          englishTutorial: 'https://www.ganatan.com/tutorials/getting-started-with-angular',
          frenchTutorial: 'https://www.ganatan.com/tutorials/demarrer-avec-angular',
        },
        {
          name: 'Routing',
          englishTutorial: 'https://www.ganatan.com/tutorials/routing-with-angular',
          frenchTutorial: 'https://www.ganatan.com/tutorials/routing-avec-angular',
        },
        {
          name: 'Lazy loading',
          englishTutorial: 'https://www.ganatan.com/tutorials/lazy-loading-with-angular',
          frenchTutorial: 'https://www.ganatan.com/tutorials/lazy-loading-avec-angular',
        },
        {
          name: 'Bootstrap',
          englishTutorial: 'https://www.ganatan.com/tutorials/bootstrap-with-angular',
          frenchTutorial: 'https://www.ganatan.com/tutorials/bootstrap-avec-angular',
        },
        {
          name: 'Server side Rendering',
          englishTutorial: 'https://www.ganatan.com/tutorials/server-side-rendering-with-angular-universal',
          frenchTutorial: 'https://www.ganatan.com/tutorials/server-side-rendering-avec-angular-universal',
        },
        {
          name: 'HTTPClient',
          englishTutorial: 'https://www.ganatan.com/tutorials/httpclient-with-angular',
          frenchTutorial: 'https://www.ganatan.com/tutorials/httpclient-avec-angular',
        },
        {
          name: 'Transfer State',
          englishTutorial: 'https://www.ganatan.com/tutorials/transfer-state-with-angular',
          frenchTutorial: 'https://www.ganatan.com/tutorials/transfer-state-avec-angular',
        },
        {
          name: 'Progressive Web App',
          englishTutorial: 'https://www.ganatan.com/tutorials/progressive-web-app-with-angular',
          frenchTutorial: 'https://www.ganatan.com/tutorials/progressive-web-app-avec-angular',
        },
        {
          name: 'Search Engine optimization',
          englishTutorial: 'https://www.ganatan.com/tutorials/search-engine-optimization-with-angular',
          frenchTutorial: 'https://www.ganatan.com/tutorials/search-engine-optimization-avec-angular',
        },
        {
          name: 'Components',
          englishTutorial: '',
          frenchTutorial: 'https://www.ganatan.com/tutorials/components-avec-angular',
        },
        {
          name: 'Services',
          englishTutorial: '',
          frenchTutorial: 'https://www.ganatan.com/tutorials/services-avec-angular',
        },
      ],
      backend: [
        { name: 'Local JSON' },
        { name: 'RESTFull API' },
        { name: 'CRUD API' },
        { name: 'Database Creation' },
        { name: 'Data Import' },
        { name: 'Data Export' },
      ]
    };

  }

  ngOnInit(): void {
    this.loadQuote();

    const content =
      'Cette application a été développée avec Angular version 15.1.0 et bootstrap 5.2.3' +
      ' Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)';

    const title = 'angular-starter Title : About Page';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

  }


  loadQuote() {
    const quotes = [
      {
        name: 'Lawrence of Arabia',
        title: 'There is nothing in the desert and no man needs nothing',
        link: 'https://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)'
      },
      {
        name: 'Alien Prometheus',
        title: 'Big things have small beginnings',
        link: 'https://en.wikipedia.org/wiki/Prometheus_(2012_film)'
      },
      {
        name: 'Blade Runner',
        title: 'All those moments will be lost in time... like tears in rain... Time to die.',
        link: 'https://en.wikipedia.org/wiki/Blade_Runner'
      },
    ];
    const index = quotes.length;
    let id = this.id;
    while (this.id === id) {
      id = Math.floor(Math.random() * index);
    }
    this.id = id;
    this.quote = quotes[id];
  }

}

