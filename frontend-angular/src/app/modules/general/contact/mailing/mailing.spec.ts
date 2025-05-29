import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mailing } from './mailing';

describe('Mailing', () => {
  let component: Mailing;
  let fixture: ComponentFixture<Mailing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mailing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mailing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
