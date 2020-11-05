import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-starter';
  version = 'Angular version 10.2.2';
  items = [
    {
      name: 'Reactive Form', link: 'reactive-form',
      elements: [
        { name: 'prototype', link: 'reactive-form/prototype' },
        { name: 'form-control', link: 'reactive-form/form-control' },
        { name: 'form-control-class', link: 'reactive-form/form-control-class' },
        { name: 'form-group', link: 'reactive-form/form-group' },
        { name: 'form-builder', link: 'reactive-form/form-builder' },
        { name: 'form-builder-nested', link: 'reactive-form/form-builder-nested' },
        { name: 'form-array', link: 'reactive-form/form-array' },
        { name: 'form-multi', link: 'reactive-form/form-multi' },
      ]
    },
    {
      name: 'Features', link: 'Features',
      elements: [
        { name: 'charts', link: 'charts' },
        { name: 'leaflet', link: 'leaflet' },
        { name: 'movies-images-list', link: 'movies-images-list' },
        { name: 'httpclient', link: 'httpclient' },
        { name: 'template-driven-forms', link: 'template-driven-forms' },
        { name: 'components', link: 'components' },
        { name: 'services', link: 'services' }
      ]
    },
    {
      name: 'CRUD', link: 'crud',
      elements: [
        { name: 'continents', link: 'crud/continents' },
        { name: 'countries', link: 'crud/countries' },
        { name: 'cities', link: 'crud/cities' },
        { name: 'shows', link: 'crud/shows' },
        { name: 'movies', link: 'crud/movies' },
        { name: 'shows-images', link: 'crud/shows-images' },
        { name: 'movies-images', link: 'crud/movies-images' },
      ]
    },
    {
      name: 'Typescript', link: 'typescript',
      elements: [
        { name: 'modules', link: 'typescript/modules' },
        { name: 'interfaces', link: 'typescript/interfaces' },
        { name: 'classes', link: 'typescript/classes' },
        { name: 'functions', link: 'typescript/functions' },
        { name: 'types', link: 'typescript/types' },
        { name: 'typing-function', link: 'typescript/typing-function' },
      ]
    },
    {
      name: 'bootstrap-prototype', link: 'bootstrap-prototype',
      elements: [
        { name: 'alerts', link: 'bootstrap-prototype/alerts' },
        { name: 'badge', link: 'bootstrap-prototype/badge' },
        { name: 'blockquotes', link: 'bootstrap-prototype/blockquotes' },
        { name: 'breadcrumb', link: 'bootstrap-prototype/breadcrumb' },
        { name: 'buttons', link: 'bootstrap-prototype/buttons' },
        { name: 'collapse', link: 'bootstrap-prototype/collapse' },
        { name: 'dropdowns', link: 'bootstrap-prototype/dropdowns' },
        { name: 'forms', link: 'bootstrap-prototype/forms' },
        { name: 'list-group', link: 'bootstrap-prototype/list-group' },
        { name: 'modal', link: 'bootstrap-prototype/modal' },
        { name: 'pagination', link: 'bootstrap-prototype/pagination' },
        { name: 'popovers', link: 'bootstrap-prototype/popovers' },
        { name: 'progress', link: 'bootstrap-prototype/progress' },
        { name: 'spinners', link: 'bootstrap-prototype/spinners' },
      ]
    },
  ];

  constructor(
    public router: Router,
    public renderer: Renderer2) { }

  onSelectMenu(link: any): void {
    const element = document.getElementById('bd-docs-nav');
    this.renderer.removeClass(element, 'show');
    const route = '/' + link;
    this.router.navigate([route]);
  }


}

