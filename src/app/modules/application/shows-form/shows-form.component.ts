import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import { PageFormComponent } from '../../../components/page-form/page-form.component';

@Component({
  selector: 'app-shows-form',
  templateUrl: './shows-form.component.html',
  styleUrls: ['./shows-form.component.css']
})
export class ShowsFormComponent extends PageFormComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  initialize() {
    this.endpoint = 'shows';
    this.titleForm = 'Show Form';
    this.icon = 'fas fa-laptop';
    super.initialize();
  }

  createForm() {
    this.form = this.fb.group({
      id: null,
      name: [null,
        [Validators.required]
      ],
      wikipediaLink: null,
      releaseDate: null,
      img: null,
      show: null,
      movie: null,
      fileName: null,
    });
    super.createForm();
  }

  resetForm() {
    this.item.id = null;
    this.item.name = null;
    this.item.wikipediaLink = null;
    this.item.fileName = null;
    this.item.img = null;
    this.item.show = true;
    this.item.movie = false;
    this.item.releaseDate = null;
    super.resetForm();
  }

  setFormValue(item: any) {
    this.form.controls.id.setValue(item.id);
    this.form.controls.name.setValue(item.name);
    this.form.controls.wikipediaLink.setValue(item.wikipediaLink);
    this.form.controls.fileName.setValue(item.fileName);
    this.form.controls.img.setValue(item.img);
    this.form.controls.show.setValue(item.show);
    this.form.controls.movie.setValue(item.movie);
    this.form.controls.releaseDate.setValue(item.releaseDate);
    super.setFormValue(item);
  }

  get name() {
    return this.form.get('name');
  }

}
