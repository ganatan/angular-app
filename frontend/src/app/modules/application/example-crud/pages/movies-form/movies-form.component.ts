import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import { PageFormComponent } from '../../components/page-form/page-form.component';

@Component({
  selector: 'app-movies-form',
  templateUrl: './movies-form.component.html',
  styleUrls: ['./movies-form.component.css']
})
export class MoviesFormComponent extends PageFormComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  initialize(): void {
    this.endpoint = 'movies';
    this.titleForm = 'Movie Form';
    this.icon = 'fas fa-film';
    super.initialize();
  }

  createForm(): void {
    this.form = this.fb.group({
      id: null,
      name: [null,
        [Validators.required]
      ],
      wikipediaLink: null,
      releaseDate: null,
      image: null,
      show: null,
      movie: null,
      fileName: null,
    });
    super.createForm();
  }

  resetForm(): void {
    this.item.id = null;
    this.item.name = null;
    this.item.wikipediaLink = null;
    this.item.fileName = null;
    this.item.image = null;
    this.item.show = false;
    this.item.movie = true;
    this.item.releaseDate = null;
    super.resetForm();
  }

  setFormValue(item: any): void {
    this.form.controls.id.setValue(item.id);
    this.form.controls.name.setValue(item.name);
    this.form.controls.wikipediaLink.setValue(item.wikipediaLink);
    this.form.controls.fileName.setValue(item.fileName);
    this.form.controls.image.setValue(item.image);
    this.form.controls.show.setValue(item.show);
    this.form.controls.movie.setValue(item.movie);
    this.form.controls.releaseDate.setValue(item.releaseDate);
    super.setFormValue(item);
  }

  get name(): any {
    return this.form.get('name');
  }

}
