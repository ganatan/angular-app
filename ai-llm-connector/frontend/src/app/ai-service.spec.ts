import { TestBed } from '@angular/core/testing';
import { AiService } from './ai-service';
import { provideHttpClient } from '@angular/common/http';

describe('Person', () => {
  let service: AiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        AiService,
      ],
    });
    service = TestBed.inject(AiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
