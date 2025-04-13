import { Provider } from '@angular/core';
import { environment } from '../../../../../../environments/environment';

import { ITEMS_SERVICE } from './items.token';
import { ItemsApiService } from './items-api.service';
import { ItemsMockService } from './items-mock.service';

export const ItemsProvider: Provider[] = [
  ItemsApiService,
  ItemsMockService,
  {
    provide: ITEMS_SERVICE,
    useExisting: environment.useDatabase ? ItemsApiService : ItemsMockService
  }
];
