import { Component, OnInit } from '@angular/core';
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
    private meta: Meta,
    private titleService: Title) {

    this.features =
      [
        {
          name: 'Components',
          description: 'Define and control views',
          icon: 'fa-share-alt-square',
          link: 'components'
        },
        {
          name: 'Services',
          description: 'A great way to share information among classes',
          icon: 'fa-address-card',
          link: 'services'
        },
        {
          name: 'HttpClient',
          description: 'Add dialogs to your site',
          icon: 'fa-comment-alt',
          link: 'httpclient'
        },
        {
          name: 'Responsive Images list',
          description: 'Responsive Movies List',
          icon: 'fa-text-width',
          link: 'movies-images-list'
        },
        {
          name: 'Directives',
          description: 'Change the appearance or behavior of a DOM element',
          icon: 'fa-text-width',
          link: 'directives'
        },
        {
          name: 'Pipes',
          description: 'Write display-value transformations',
          icon: 'fa-code',
          link: 'pipes'
        },
        {
          name: 'RxJS/Observables',
          description: 'Provide support for passing messages between publishers and subscribers',
          icon: 'fa-comment-alt',
          link: 'observables'
        },
        {
          name: 'modal',
          description: 'Add dialogs to your site',
          icon: 'fa-comment-alt',
          link: 'modal'
        },
        {
          name: 'Reactiveform',
          description: 'Add dialogs to your site',
          icon: 'fa-comment-alt',
          link: 'modal'
        },
        {
          name: 'Template Driven Form',
          description: 'Add dialogs to your site',
          icon: 'fa-comment-alt',
          link: 'modal'
        },
      ];

  }

  ngOnInit() {
    this.titleService.setTitle('angular.ganatan : Une application Progressive WebApp développée avec Angular');
    this.meta.addTag({
      name: 'angular-webapp',
      content: 'danny ganatan'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Cette application a été développée avec angular version 8.2.12 et bootstrap ' +
          ' Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)'
      });
  }

}
