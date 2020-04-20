import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleBootstrapComponentsComponent } from './example-bootstrap-components.component';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('ExampleBootstrapComponentsComponent', () => {
  let component: ExampleBootstrapComponentsComponent;
  let fixture: ComponentFixture<ExampleBootstrapComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ExampleBootstrapComponentsComponent,
      ],
      providers: [
        FormBuilder
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleBootstrapComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
