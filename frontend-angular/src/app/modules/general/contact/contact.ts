import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-contact',
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

}