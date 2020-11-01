import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleBootstrapPrototypeComponent } from './example-bootstrap-prototype.component';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('ExampleBootstrapComponentsComponent', () => {
  let component: ExampleBootstrapPrototypeComponent;
  let fixture: ComponentFixture<ExampleBootstrapPrototypeComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ExampleBootstrapPrototypeComponent,
      ],
      providers: [
        FormBuilder
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleBootstrapPrototypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
