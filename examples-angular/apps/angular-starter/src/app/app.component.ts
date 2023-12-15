import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ToolsComponent } from '@examples-angular/tools';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    ToolsComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-starter';

  constructor() {
  }

}
