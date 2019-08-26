import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import { PageFormComponent } from '../../../components/page-form/page-form.component';

@Component({
  selector: 'app-continents-form',
  templateUrl: './continents-form.component.html',
  styleUrls: ['./continents-form.component.css']
})
export class ContinentsFormComponent extends PageFormComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  initialize() {
    this.endpoint = 'continents';
    this.titleForm = 'Continent Form';
    this.icon = 'fas fa-globe';
    super.initialize();
  }

  createForm() {
    this.form = this.fb.group({
      id: null,
      code: [null,
        [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(2)
        ]
      ],
      name: [null,
        [Validators.required]
      ],
      wikipediaLink: null,
      population: [null,
        [Validators.pattern('[0-9 ]*')]
      ],
      area: [null,
        [Validators.pattern('[0-9 ]*')]
      ],
      frenchName: null,
      countriesNumber: [null,
        [Validators.pattern('[0-9 ]*')]
      ],
    });
    super.createForm();

  }

  resetForm() {
    this.item.id = null;
    this.item.code = null;
    this.item.name = null;
    this.item.frenchName = null;
    this.item.countriesNumber = null;
    this.item.area = null;
    this.item.population = null;
    this.item.wikipediaLink = null;
    super.resetForm();
  }

  setFormValue(item: any) {
    this.form.controls.id.setValue(item.id);
    this.form.controls.name.setValue(item.name);
    this.form.controls.code.setValue(item.code);
    this.form.controls.area.setValue(item.area);
    this.form.controls.population.setValue(item.population);
    this.form.controls.frenchName.setValue(item.frenchName);
    this.form.controls.countriesNumber.setValue(item.countriesNumber);
    this.form.controls.wikipediaLink.setValue(item.wikipediaLink);
    super.setFormValue(item);
  }

  get name() {
    return this.form.get('name');
  }

  get code() {
    return this.form.get('code');
  }

  get population() {
    return this.form.get('population');
  }

  get area() {
    return this.form.get('area');
  }

  get frenchName() {
    return this.form.get('frenchName');
  }

  get countriesNumber() {
    return this.form.get('countriesNumber');
  }

}
