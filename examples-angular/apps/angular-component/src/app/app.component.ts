import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImageComponent } from './image/image.component';

@Component({
  standalone: true,
  imports: [
    ImageComponent,
    RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-component';
  display:any;

  constructor() 
   {
    this.display = {
      cssClass : 'toto'
    }
   }
   
}
