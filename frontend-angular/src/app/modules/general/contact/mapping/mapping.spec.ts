import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mapping } from './mapping';

describe('Mapping', () => {
  let component: Mapping;
  let fixture: ComponentFixture<Mapping>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mapping]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mapping);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
