import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgaEditComponent } from '@ganatan-angular/nga-edit';
import { NgaTableComponent } from '@ganatan-angular/nga-table';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgaEditComponent,
    NgaTableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'library-angular';
}
