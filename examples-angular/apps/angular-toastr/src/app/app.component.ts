import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ToastModule } from './toast.module';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ToastModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-toastr';

  exampleText: string;
  exampleMemo: string;

  constructor() {
    this.exampleText = 'text example';
    this.exampleMemo = 'Memo example';
  }

  addText() {
    this.exampleMemo = this.exampleMemo + '\r\n' + this.exampleText;
  }

}
