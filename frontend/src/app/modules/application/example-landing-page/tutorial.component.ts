import { Component, ViewEncapsulation } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-example-modal',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TutorialComponent {

  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  constructor(@Inject(PLATFORM_ID) private platformId: object,) {

  }
}
