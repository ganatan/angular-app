import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercice',
  imports: [FormsModule],
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent {

  firstName = 'Paul';
  lastName = 'Atreides';

}
