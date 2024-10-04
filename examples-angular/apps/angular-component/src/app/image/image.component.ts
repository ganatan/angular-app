import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  imports: [CommonModule],
})
export class ImageComponent {
  @Input() typeobj: { type: string } | undefined;

  @Input() type: string | undefined;

  @Output() typeChange = new EventEmitter<string>();

  changeType() {
    this.type = 'bbbbbbbbbexampleenfant';
    this.typeChange.emit(this.type);
  }

  changeTypeobj(){
    this.typeobj = { type: 'bbbbbbbbb-typeimageexample' };
  }

}
