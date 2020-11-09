import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor() { }

  getUrl(): string {
    return environment.url;
  }

}

