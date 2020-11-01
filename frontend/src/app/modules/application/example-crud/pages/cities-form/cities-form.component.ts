import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import { PageFormComponent } from '../../components/page-form/page-form.component';

@Component({
  selector: 'app-cities-form',
  templateUrl: './cities-form.component.html',
  styleUrls: ['./cities-form.component.css']
})
export class CitiesFormComponent extends PageFormComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  initialize(): void {
    this.endpoint = 'cities';
    this.titleForm = 'City Form';
    this.icon = 'fas fa-city';
    super.initialize();
  }

  createForm(): void {
    this.form = this.fb.group({
      id: null,
      name: [null,
        [Validators.required]
      ],
      capital: null,
      wikipediaLink: null,
    });
    super.createForm();
  }

  resetForm(): void {
    this.item.id = null;
    this.item.name = null;
    this.item.capital = null;
    this.item.wikipediaLink = null;
    super.resetForm();
  }

  setFormValue(item: any): void {
    this.form.controls.id.setValue(item.id);
    this.form.controls.name.setValue(item.name);
    this.form.controls.capital.setValue(item.capital);
    this.form.controls.wikipediaLink.setValue(item.wikipediaLink);
    super.setFormValue(item);
  }

  get name(): any {
    return this.form.get('name');
  }

}
