import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleReactiveFormComponent } from './example-reactive-form.component';

import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PrettyJsonPipe } from './pretty-json.pipe';

describe('ExampleReactiveFormComponent', () => {
  let component: ExampleReactiveFormComponent;
  let fixture: ComponentFixture<ExampleReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [
        ExampleReactiveFormComponent,
        PrettyJsonPipe
      ],
      providers: [
        FormBuilder
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
