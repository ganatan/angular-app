import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-mouseover';

  onMouseoverHelp() {
    console.log('00000000001:onMouseoverHelp');
  }

  onMouseEnter() {
    console.log('00000000001:onMouseEnter');
  }

  onMouseOver() {
    console.log('00000000001:onMouseOver');
  }

}
