import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-module-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageModuleComponent {
  @Input() cssParent: string | undefined;
}
