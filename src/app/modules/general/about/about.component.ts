import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  dependencies: any;
  features: any;

  constructor() {
    this.dependencies = {
      frontend: [
        { name: 'Angular 8.2.14' },
        { name: 'Angular Universal 8.1.1' },
        { name: 'Font Awesome 5.10.2' },
        { name: 'Bootstrap 4.3.1' },
        { name: 'JQuery 3.4.1' },
      ],
      backend: [
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'pg-promise' },
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
          englishTutorial: 'https://www.ganatan.com/tutorials/web-application-with-angular',
          frenchTutorial: 'https://www.ganatan.com/tutorials/application-web-avec-angular',
        },
        {
          name: 'Responsive Layout',
          englishTutorial: null,
          frenchTutorial: null,
        },
        {
          name: 'Components',
          englishTutorial: null,
          frenchTutorial: null,
        },
        {
          name: 'Modules',
          englishTutorial: null,
          frenchTutorial: null,
        },
        {
          name: 'Search / Grid / Pagaination',
          englishTutorial: null,
          frenchTutorial: null,
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

}
