import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModalFormService } from './modal-form/modal-form.service';
import { ModalFormModule } from './modal-form/modal-form.module';

import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ModalFormModule,
  ],
  providers: [
    ModalFormService,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-modal';
  dataModal: any;

  constructor(private modalFormService: ModalFormService) {
    const dataModal = {
      name: '1111',
      description: '2222',
    }
    this.dataModal = dataModal;
  }


  openModal() {
    this.modalFormService.open(this.dataModal);
    // this.modalFormService.open('modalForm', this.dataModal);
    this.modalFormService.sendData()
      .subscribe(
        data => {
          console.log('00000000001:openModal:' + JSON.stringify(data))
          this.dataModal = {
            name: data['name'],
            description: data['description'],
          }
        });
  }
}
