import { Component } from '@angular/core';

import { ModalEbookService } from './modal-ebook/modal-ebook.service';

@Component({
  selector: 'app-example-modal',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent {

  constructor(private modalEbookService: ModalEbookService) {
  }


  openModal() {
    this.modalEbookService.open('modalEbook', 10);
  }

}
