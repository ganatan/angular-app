import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImageComponent } from './image/image.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ImageComponent,
    RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-component';
  display: any;
  type: string = 'aaaaaa-typeimageexample';
  // typeobj: string = 'aaaaaa-typeimageexample';
  typeobj = { type: 'aaaaaa-typeimageexample' };

  constructor() {
    this.display = {
      cssClass: 'toto'
    }
  }

}
