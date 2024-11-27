import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheckboxModule } from './checkbox.module';

import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    CheckboxModule,
    FormsModule,    
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  title: string;

  ngacheckbox1: any;
  ngacheckbox2: any;
  ngacheckbox3: any;
  
  inputModel: any;

  checkbox1: any;
  checkbox2: any;

  constructor() {
    this.title = "angular-checkbox"

    this.ngacheckbox1 = null;
    this.ngacheckbox2 = null;
    this.ngacheckbox3 = null;

    this.checkbox1 = true;
    this.checkbox2 = false;
  }

  onButtonclick(event: any) {
    console.log('onButtonclick:TutorialComponent:' + event.value);
  }

  onChange() {
    console.log('onChange:TutorialComponent:');
  }

}
