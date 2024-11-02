import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ItemService } from './item.service';
import { Item } from './item';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent {

  formItem!: FormGroup;
  item!: Item;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private itemService: ItemService) {

    this.formItem = this.fb.group({
      id: '',
      code: ['', [Validators.required, Validators.minLength(2)]],
      name: ['', [Validators.required]],
      wikipediaLink: '',
      area: [0, [Validators.required, Validators.pattern("^[0-9]*$")]],
      population: [0, [Validators.required, Validators.pattern("^[0-9]*$")]],
      countriesNumber: [0, [Validators.required, Validators.pattern("^[0-9]*$")]],
      density: 0,
    });
    this.getItemById();
  }

  get name() { return this.formItem.get('name'); }
  get code() { return this.formItem.get('code'); }
  get area() { return this.formItem.get('area'); }
  get population() { return this.formItem.get('population'); }
  get countriesNumber() { return this.formItem.get('countriesNumber'); }
  get density() { return this.formItem.get('density'); }

  getItemById(): void {
    this.route.params
      .subscribe(params => {
        const id = params['id'];
        if (id !== undefined) {
          this.getItem(parseInt(id));
        }
      });
  }

  getItem(id: number): void {
    if (id !== 0) {
      this.itemService.getItem(id)
        .subscribe(item => {
          this.item = item;
          this.setForm(this.formItem, item);
        });
    }
  }

  setForm(form: FormGroup, item: Item) {
    form.setValue(item);
  }

  resetForm() {
    const item = {
      id: null,
      code: '',
      name: '',
      wikipediaLink: '',
      area: 0,
      population: 0,
      countriesNumber: 0,
      density: 0,
    }
    this.formItem.patchValue(item);
  }

  onCreate() {
    this.resetForm();
  }

  onCopy() {
    this.formItem.patchValue({ id: 0 });
  }

  onUpdate() {
    const id = this.formItem.value['id'];
    if (id > 0) {
      this.updateItem(this.formItem.value);
    } else {
      this.createItem(this.formItem.value);
    }
  }

  onDelete() {
    const id = this.formItem.value['id'];
    if ((id != undefined) && (id != null)) {
      this.deleteItem(this.item);
    }
  }

  updateItem(item: Item) {
    this.itemService.updateItem(item)
      .subscribe(dataUpdate => {
        this.setForm(this.formItem, dataUpdate);
      });
  }

  deleteItem(item: Item) {
    this.itemService.deleteItem(item)
      .subscribe(() => {
        this.resetForm();
      });
  }

  createItem(item: Item) {
    this.itemService.createItem(item)
      .subscribe(data => {
        this.setForm(this.formItem, data);
      });
  }

}