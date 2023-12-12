import { Component, inject } from '@angular/core';
import { ModalFormService } from './modal-form.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})

export class ModalFormComponent {


  private modalService = inject(ModalFormService);

  name: string;
  description: string;
  exampleForm = this.fb.group({
    name: [''],
    code: [''],
  });

  constructor(private fb: FormBuilder) {

    this.name = '';
    this.description = '';
    this.modalService.receiveData()
      .subscribe(
        data => {
          this.exampleForm.patchValue({
            code: data['code'],
            name: data['name'],
          });
        });
  }

  onSave() {
    const item = {
      name: this.exampleForm.value['name'],
      code: this.exampleForm.value['code'],
    }
    this.modalService.afterSaved(item);
  }

}
