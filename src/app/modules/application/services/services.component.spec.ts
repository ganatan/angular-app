import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesComponent } from './services.component';
import { SafePipe } from './safe.pipe';

describe('ServicesComponent', () => {
  let component: ServicesComponent;
  let fixture: ComponentFixture<ServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ServicesComponent,
        SafePipe,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
