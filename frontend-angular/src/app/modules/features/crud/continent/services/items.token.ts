import { InjectionToken } from '@angular/core';
import { ItemsServiceInterface } from './item.model';

export const ITEMS_SERVICE = new InjectionToken<ItemsServiceInterface>('ItemsService');
