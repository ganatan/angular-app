import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';

@Component({
  standalone: true,
  imports: [
    RichTextEditorComponent,
    RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-component';
  nameComponent01 = 'aaaaname';
  nameComponent02 = 'bbbbname';
  valueComponent01 = 'aaaavalue';
  valueComponent02 = 'bbbbvalue';

  constructor() {
  }

}
