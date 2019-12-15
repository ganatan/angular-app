import { Injectable } from '@angular/core';
import { Config } from './config';

@Injectable()
export class ConfigService {

  public config: Config = new Config();

  constructor() {

    const api = false;
    const url = './assets/params/json/';

    /* const api = true;
    const url = 'http://localhost:5200/'; */

    this.config.api = api;
    this.config.url = url;

  }

}

