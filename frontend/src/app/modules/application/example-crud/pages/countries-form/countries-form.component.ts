import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import { PageFormComponent } from '../../components/page-form/page-form.component';

@Component({
  selector: 'app-countries-form',
  templateUrl: './countries-form.component.html',
  styleUrls: ['./countries-form.component.css']
})
export class CountriesFormComponent extends PageFormComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  initialize(): void {
    this.endpoint = 'countries';
    this.titleForm = 'Country Form';
    this.icon = 'far fa-flag';
    super.initialize();
  }

  createForm(): void {
    this.form = this.fb.group({
      id: null,
      name: [null,
        [Validators.required]
      ],
      wikipediaLink: null,
      isoAlpha2: [null,
        [Validators.required,
        Validators.pattern('[a-z A-Z ]*'),
        Validators.minLength(2),
        Validators.maxLength(2)
        ]
      ],
      isoAlpha3: [null,
        [Validators.required,
        Validators.pattern('[a-z A-Z ]*'),
        Validators.minLength(3),
        Validators.maxLength(3)
        ]
      ],
      isoNumeric: [null,
        [Validators.required,
        Validators.pattern('[0-9 ]*'),
        Validators.minLength(3),
        Validators.maxLength(3)
        ]
      ],
      image: null,
      flag: [null,
        [Validators.required]
      ],
    });
    super.createForm();

  }

  resetForm(): void {
    this.item.id = null;
    this.item.name = null;
    this.item.wikipediaLink = null;
    this.item.isoAlpha2 = null;
    this.item.isoAlpha3 = null;
    this.item.isoNumeric = null;
    this.item.wikipediaLink = null;
    this.item.flag = null;
    this.item.image = null;
    super.resetForm();
  }

  setFormValue(item: any): void {
    this.form.controls.id.setValue(item.id);
    this.form.controls.name.setValue(item.name);
    this.form.controls.wikipediaLink.setValue(item.wikipediaLink);
    this.form.controls.isoAlpha2.setValue(item.isoAlpha2);
    this.form.controls.isoAlpha3.setValue(item.isoAlpha3);
    this.form.controls.isoNumeric.setValue(item.isoNumeric);
    this.form.controls.flag.setValue(item.flag);
    this.form.controls.image.setValue(item.image);
    super.setFormValue(item);
  }

  get name(): any {
    return this.form.get('name');
  }

  get isoAlpha2(): any {
    return this.form.get('isoAlpha2');
  }

  get isoAlpha3(): any {
    return this.form.get('isoAlpha3');
  }

  get isoNumeric(): any {
    return this.form.get('isoNumeric');
  }

  get flag(): any {
    return this.form.get('flag');
  }

}
