import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailingComponent } from './mailing.component';

describe('MailingComponent', () => {
  let component: MailingComponent;
  let fixture: ComponentFixture<MailingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
