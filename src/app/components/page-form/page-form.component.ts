import { Component, Injector } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ConfigService } from '../../services/config/config.service';
import { ItemsService } from '../../services/items/items.service';

@Component({
  selector: 'app-page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.css']
})
export class PageFormComponent {

  api: any;
  url: any;
  endpoint: any;
  datasourceColor: any;
  icon: any;
  form: FormGroup;
  item: any = {};
  titleForm: any = {};
  datasource: string;

  public route: ActivatedRoute;
  public router: Router;
  public configService: ConfigService;
  public itemsService: ItemsService;
  public fb: FormBuilder;

  constructor(injector: Injector) {

    this.route = injector.get(ActivatedRoute);
    this.router = injector.get(Router);
    this.configService = injector.get(ConfigService);
    this.itemsService = injector.get(ItemsService);
    this.fb = injector.get(FormBuilder);

    this.initialize();
    this.createForm();
    this.getItemById();

  }

  initialize() {
    this.api = this.configService.config.api;
    this.url = this.configService.config.url + this.endpoint;
    if (this.api) {
      this.datasourceColor = 'text-primary';
      this.datasource = 'CRUD API';
    } else {
      this.datasource = 'LOCAL JSON (no crud)';
      this.datasourceColor = 'text-danger';
    }
  }

  createForm() {
  }

  getItemById(): void {
    this.route.params
      .subscribe(params => {
        if (params.id !== undefined) {
          this.itemsService.getItem(this.api, this.url, params.id)
            .subscribe(data => {
              if ((data !== null) && (data !== undefined)) {
                this.item = data;
                this.setFormValue(this.item);
              } else {
                this.resetForm();
              }
            });
        }
      });
  }

  resetForm() {
    this.setFormValue(this.item);
  }

  setFormValue(item: any) {
  }

  onCreate() {
    this.resetForm();
  }

  onUpdate() {
    this.item = this.form.value;
    const id = this.item.id;
    if ((id === null) || (id === undefined)) {
      this.createItem(this.url, this.item);
    } else {
      this.updateItem(this.url, this.item, id);
    }
  }

  onDelete() {
    if ((this.item.id !== undefined) && (this.item.id != null)) {
      this.deleteItem(this.url, this.item.id);
    }
  }

  onCopy() {
    this.item.id = null;
    this.form.get('id').setValue(null);
  }

  createItem(url: any, item: any) {
    this.itemsService.addItem(url, item)
      .subscribe(data => {
        this.item = data;
        this.form.setValue(data);
      });
  }

  updateItem(url: any, item: any, id: number) {
    this.itemsService.updateItem(item, id, url)
      .subscribe(data => {
        this.item = data;
        this.form.setValue(this.item);
      });
  }

  deleteItem(url: any, id: number) {
    this.itemsService.deleteItem(url, id)
      .subscribe(data => {
        this.resetForm();
      });
  }

}
