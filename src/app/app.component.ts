import { Component } from '@angular/core';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = environment.application.title;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;

  constructor() {
    console.log('Constructor:AppComponent');
  }

}
