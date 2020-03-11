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
          icon: 'far fa-chart-bar',
          type: 'Components',
          description: 'Smartphone Component with Input, Output and Event Emitter',
          image: 'showcase-components.png',
          link: 'components'
        },
        {
          icon: 'far fa-chart-bar',
          type: 'Services',
          description: 'Use services to view a playlist and a youtube player',
          image: 'showcase-services-playlist-youtube.png',
          link: 'services'
        },
        {
          icon: 'far fa-chart-bar',
          type: 'HttpClient',
          description: 'Use an external API with the HttpClient module',
          image: 'showcase-httpclient.png',
          link: 'httpclient'
        },
        {
          icon: 'far fa-chart-bar',
          type: 'Responsive Images list',
          description: 'Display a Responsive List of Images',
          image: 'showcase-responsive-images-list.png',
          link: 'movies-images-list'
        },
        {
          icon: 'fas fa-map-signs',
          type: 'Leafleft',
          description: 'An open-source JavaScript library for mobile-friendly interactive maps',
          image: 'showcase-leaflet-feature.png',
          link: 'leaflet'
        },
        {
          icon: 'far fa-chart-bar',
          type: 'Charts',
          description: 'Integrate the open-source library Chart.js',
          image: 'showcase-charts.png',
          link: 'chartjs'
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
        content: 'Cette application a été développée avec Angular version 9.0.6 et bootstrap 4.4.1' +
          ' Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)'
      });
  }
}