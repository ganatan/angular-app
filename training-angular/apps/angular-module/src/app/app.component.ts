import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TutorialModule } from './tutorial/tutorial.module';

@Component({
  standalone: true,
  imports: [
    TutorialModule,
    RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-component';
  display: any;

  constructor() {
    this.display = {
      cssClass: 'toto'
    }
  }

}
