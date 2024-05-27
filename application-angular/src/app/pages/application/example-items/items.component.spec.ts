import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { ItemsService } from './items.service';

describe('ItemsService', () => {
  let service: ItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ItemsService,
        { provide: HttpClient, useValue: {} }
      ]
    });
    service = TestBed.inject(ItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
