import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImageStandaloneComponent } from './image-standalone/image.component';
import { ImageModuleModule } from './image-module/image.module';
import { ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true,
  imports: [
    ImageStandaloneComponent,
    ImageModuleModule,
    RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  cssParent: string;
  constructor() {
    this.cssParent = 'green-text';
  }
}


/*
  this.cssParent = { color: 'green' };
cssParent: { [key: string]: string };
cssParent:string;
constructor() {
  this.cssParent = 'color: green';
}
  */
