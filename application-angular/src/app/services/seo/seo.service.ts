import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private meta: Meta,
    private titleService: Title) {

  }

  public setMetaDescription(content: string) {

    this.meta.updateTag(
      {
        name: 'description',
        content: content
      });
  }

  public setMetaTitle(title:string) {

    this.titleService.setTitle(title);

  }

}
