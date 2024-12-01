import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    CommonModule,
  ],
  selector: 'app-standalone-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageStandaloneComponent {
  @Input() cssParent: string | undefined;
}

/* @Input() cssParent: any | undefined;
@Input() cssParent2: string | undefined;
@Input() cssParent: { [key: string]: string } | undefined;
*/
