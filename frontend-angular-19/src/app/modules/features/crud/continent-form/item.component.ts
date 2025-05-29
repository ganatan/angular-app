import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ItemService } from './services/item.service';
import { Item } from './services/item';

import { DEFAULT_ITEM, NAME_ITEM } from './services/item.constants';

@Component({
  selector: 'app-item',
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  name_default = NAME_ITEM;
  formItem!: FormGroup;
  item!: Item;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private itemService: ItemService) {

    this.formItem = this.fb.group({
      id: DEFAULT_ITEM.id,
      code: [DEFAULT_ITEM.code, [Validators.required, Validators.minLength(2)]],
      name: [DEFAULT_ITEM.name, [Validators.required]],
      wikipediaLink: DEFAULT_ITEM.wikipediaLink,
      area: [DEFAULT_ITEM.area, [Validators.required, Validators.pattern("^[0-9]*$")]],
      population: [DEFAULT_ITEM.population, [Validators.required, Validators.pattern("^[0-9]*$")]],
      countriesCount: [DEFAULT_ITEM.countriesCount, [Validators.required, Validators.pattern("^[0-9]*$")]],
      density: DEFAULT_ITEM.density,
    });

    this.getItemById();
  }

  get name() { return this.formItem.get('name'); }
  get code() { return this.formItem.get('code'); }
  get area() { return this.formItem.get('area'); }
  get population() { return this.formItem.get('population'); }
  get countriesCount() { return this.formItem.get('countriesCount'); }
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
    this.formItem.patchValue(DEFAULT_ITEM);
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