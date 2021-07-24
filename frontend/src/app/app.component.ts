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
  version = 'Angular version 12.1.3';
  items = [
    {
      name: 'bootstrap', link: 'bootstrap',
      elements: [
        { name: 'alerts', link: 'bootstrap/alerts' },
        { name: 'badge', link: 'bootstrap/badge' },
        { name: 'blockquotes', link: 'bootstrap/blockquotes' },
        { name: 'breadcrumb', link: 'bootstrap/breadcrumb' },
        { name: 'buttons', link: 'bootstrap/buttons' },
        { name: 'collapse', link: 'bootstrap/collapse' },
        { name: 'dropdowns', link: 'bootstrap/dropdowns' },
        { name: 'forms', link: 'bootstrap/forms' },
        { name: 'list-group', link: 'bootstrap/list-group' },
        { name: 'modal', link: 'bootstrap/modal' },
        { name: 'pagination', link: 'bootstrap/pagination' },
        { name: 'popovers', link: 'bootstrap/popovers' },
        { name: 'progress', link: 'bootstrap/progress' },
        { name: 'spinners', link: 'bootstrap/spinners' },
      ]
    },
    {
      name: 'Features', link: 'Features',
      elements: [
        { name: 'httpclient', link: 'httpclient' },
        { name: 'template-driven-forms', link: 'template-driven-forms' },
        { name: 'components', link: 'components' },
        { name: 'services', link: 'services' }
      ]
    },
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

