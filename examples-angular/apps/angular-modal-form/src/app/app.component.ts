import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModalFormService } from './modal-form/modal-form.service';
import { ModalFormModule } from './modal-form/modal-form.module';

import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';

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

  private modalFormService = inject(ModalFormService);

  constructor() {
    const dataModal = {
      code: 'code 1111',
      name: 'name 2222',
    }
    this.dataModal = dataModal;
  }

  openModal() {
    this.modalFormService.open(this.dataModal);
    this.modalFormService.sendData()
      .subscribe(
        data => {
          console.log('00000000001:openModal:' + JSON.stringify(data));
          this.dataModal = {
            code: data['code'],
            name: data['name'],
          } 
        });
  }

}