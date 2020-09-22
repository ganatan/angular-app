import { TestBed } from '@angular/core/testing';

import { ItemService } from './item.service';
import { HttpClientModule } from '@angular/common/http';

describe('get-all-one-from-service - Item Service', () => {

  let service: ItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ItemService);
  });

  it('Should be create Service', () => {
    expect(service).toBeTruthy();
  });
});
