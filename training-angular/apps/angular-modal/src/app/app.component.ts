import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModalService } from './modal/modal.service';
import { ModalModule } from './modal/modal.module';

import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ModalModule,
  ],
  providers: [
    ModalService,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-modal';
  dataModal: any;

  private modalService = inject(ModalService);

  constructor() {
    const dataModal = {
      name: 'name 1111',
      description: 'description 2222',
    }
    this.dataModal = dataModal;
  }

  openModal() {
    this.modalService.open(this.dataModal);
    this.modalService.sendData()
      .subscribe(
        data => {
          this.dataModal = {
            name: data['name'],
            description: data['description'],
          }
        });
  }

}