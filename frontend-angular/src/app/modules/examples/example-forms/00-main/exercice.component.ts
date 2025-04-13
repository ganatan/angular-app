import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ITEMS } from './items';

@Component({
  selector: 'app-prototype',
  imports: [CommonModule, RouterLink],
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent {
  items = ITEMS;
}
