import { TestBed } from '@angular/core/testing';

import { NgaEditService } from './nga-edit.service';

describe('NgaEditService', () => {
  let service: NgaEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgaEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
