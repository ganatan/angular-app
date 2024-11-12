import { TestBed } from '@angular/core/testing';

import { NgaTableService } from './nga-table.service';

describe('NgaTableService', () => {
  let service: NgaTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgaTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
