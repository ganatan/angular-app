import { Component } from '@angular/core';
import { ModalService } from './modal.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {

  name: string;
  description: string;

  private modalService = inject(ModalService);

  constructor() {

    this.name = '';
    this.description = '';
    this.modalService.receiveData()
      .subscribe(
        data => {
          this.name = data['name'];
          this.description = data['description'];
        });
  }

  onClose() {
    const item = {
      name: this.name,
      description: this.description,
    }
    this.modalService.afterClosed(item);
  }

}
