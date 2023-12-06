import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-select';
  items: any;
  selectValue: any;
  constructor() {
    this.selectValue = "value3";
    this.items = [
      { name: 'value1' },
      { name: 'value2' },
      { name: 'value3' },
      { name: 'value4' }
    ]
  }

  clickOnOption() {
    console.log('clickOnOption:' + this.selectValue);
  }

  clickOnSelect() {
    console.log('clickOnSelect:' + this.selectValue);
  }
  
  changeOnSelect(event:any) {
    console.log('changeOnSelect:' + JSON.stringify(event));
    console.log('changeOnSelect:' + this.selectValue);
  }

}
