import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ITEMS } from './items';

@Component({
  selector: 'app-00-main',
  imports: [CommonModule, RouterLink],
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  items = ITEMS;
}
