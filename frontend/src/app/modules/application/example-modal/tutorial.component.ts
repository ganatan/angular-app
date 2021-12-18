import { Component, OnInit } from '@angular/core';

import { ModalEbookService } from './modal-ebook/modal-ebook.service';

@Component({
  selector: 'app-example-modal',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  constructor(private modalEbookService: ModalEbookService) {
  }

  ngOnInit(): void {
  }
  
  openModal() {
    this.modalEbookService.open('modalEbook', 10);
  }

}
