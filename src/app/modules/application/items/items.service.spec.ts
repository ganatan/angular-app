import { TestBed } from '@angular/core/testing';

import { ItemsService } from './items.service';
import { HttpClientModule } from '@angular/common/http';

describe('ItemsService', () => {
  let service: ItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
    });
    service = TestBed.inject(ItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
