import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleServicesComponent } from './example-services.component';
import { SafePipe } from './safe.pipe';

describe('ExampleServicesComponent', () => {
  let component: ExampleServicesComponent;
  let fixture: ComponentFixture<ExampleServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExampleServicesComponent,
        SafePipe,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
