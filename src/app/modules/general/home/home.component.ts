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
          type: 'Bootstrap Prototype',
          description: 'Bootstrap Prototype , Badges, Buttons, Collapse, Popovers, Toasts, Tooltips',
          image: 'hub-bootstrap-prototype.png',
          link: 'bootstrap-prototype'
        },
        {
          type: 'Reactive Form',
          description: 'A model-driven approach to handling form inputs',
          image: 'hub-reactive-forms.png',
          link: 'reactive-form'
        },
        {
          type: 'Services',
          description: 'Use services to view a playlist and a youtube player',
          image: 'showcase-services-playlist-youtube.png',
          link: 'services'
        },
        {
          type: 'Components',
          description: 'Smartphone Component with Input, Output and Event Emitter',
          image: 'showcase-components.png',
          link: 'components'
        },
        {
          type: 'HttpClient',
          description: 'Use an external API with the HttpClient module',
          image: 'showcase-httpclient.png',
          link: 'httpclient'
        },
        {
          type: 'Template Driven Forms',
          description: 'Forms are the mainstay of business applications',
          image: 'hub-template-driven-forms.png',
          link: 'template-driven-forms'
        },
        {
          type: 'Charts',
          description: 'Integrate the open-source library Chart.js',
          image: 'showcase-charts.png',
          link: 'charts'
        },
        {
          type: 'Leafleft',
          description: 'An open-source JavaScript library for mobile-friendly interactive maps',
          image: 'showcase-leaflet-feature.png',
          link: 'leaflet'
        },
        {
          type: 'Responsive Images list',
          description: 'Display a Responsive List of Images',
          image: 'showcase-responsive-images-list.png',
          link: 'movies-images-list'
        },
      ];

  }

  ngOnInit() {
    this.titleService.setTitle('angular.ganatan: Une Application Web avec Angular');
    this.meta.addTag({
      name: 'angular.ganatan',
      content: 'danny ganatan'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Cette application a été développée avec Angular version 9.1.4 et bootstrap 4.4.1' +
          ' Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)'
      });
  }

}
