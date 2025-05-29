import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ItemService } from './services/item.service';
import { Item } from './services/item';

import { DEFAULT_ITEM, NAME_ITEM } from './services/item.constants';

@Component({
  selector: 'app-item',
  imports: [
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
  showDelete = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private itemService: ItemService) {

    this.formItem = this.fb.group({
      id: DEFAULT_ITEM.id,
      name: [DEFAULT_ITEM.name],
    });

    this.getItemById();
  }

  get name() { return this.formItem.get('name'); }

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
    if (id === 0) return;
  
    this.itemService.getItem(id).subscribe(item => {
      this.item = item;
      this.formItem.setValue(item);
    });
  }

  setForm(form: FormGroup, item: Item) {
    form.setValue(item);
  }

  resetForm() {
    this.formItem.patchValue({
      ...DEFAULT_ITEM,
    });
  }

  onCreate() {
    this.resetForm();
  }

  onCopy() {
    this.formItem.patchValue({ id: 0 });
  }

  onUpdate(): void {
    const item: Item = this.formItem.value;
  
    if (item.id > 0) {
      this.updateItem(item);
    } else {
      this.createItem(item);
    }
  }  

  updateItem(item: Item) {
    this.itemService.updateItem(item)
      .subscribe(updatedItem => {
        this.setForm(this.formItem, updatedItem);
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

  onDelete() {
    const id = this.formItem.value['id'];
    if ((id != undefined) && (id != null)) {
      this.deleteItem(this.item);
    }
  }

}