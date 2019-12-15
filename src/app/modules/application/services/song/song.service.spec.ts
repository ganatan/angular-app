import { TestBed } from '@angular/core/testing';

import { SongService } from './song.service';

describe('SongService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SongService = TestBed.get(SongService);
    expect(service).toBeTruthy();
  });
});
