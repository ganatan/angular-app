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
  selectValueSimple: any;

  constructor() {
    this.selectValueSimple = "3";

    this.selectValue = "2";
    this.items = [
      { name: 'Analyze', value: '1' },
      { name: 'Automatic', value: '2' },
      { name: 'Manual', value: '3' },
    ]
  }

  clickOnOption() {
    console.log('clickOnOption:' + this.selectValue);
  }

  clickOnSelectSimple() {
    console.log('clickOnSelectSimple:' + this.selectValueSimple);
  }

  changeOnSelectSimple(event: any) {
    console.log('changeOnSelectSimple:' + JSON.stringify(event));
    console.log('changeOnSelectSimple:' + this.selectValueSimple);
  }

  clickOnOptionSimple() {
    console.log('clickOnOptionSimple:' + this.selectValueSimple);
  }

  clickOnSelect() {
    console.log('clickOnSelect:' + this.selectValue);
  }

  changeOnSelect(event: any, data: any) {
    console.log('changeOnSelect1:' + JSON.stringify(event));
    console.log('changeOnSelect2:' + JSON.stringify(data));
    console.log('changeOnSelect3:' + this.selectValue);
  }

  onModelChange(event: any) {
    console.log('onModelChange:' + JSON.stringify(event));
    console.log('onModelChange:' + this.selectValue);
  }


  onChange1() {
    console.log('onChange1');
  }

}
