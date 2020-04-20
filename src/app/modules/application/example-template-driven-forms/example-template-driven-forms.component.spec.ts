import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTemplateDrivenFormsComponent } from './example-template-driven-forms.component';
import { FormsModule } from '@angular/forms';

describe('ExampleTemplateDrivenFormsComponent', () => {
  let component: ExampleTemplateDrivenFormsComponent;
  let fixture: ComponentFixture<ExampleTemplateDrivenFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [ ExampleTemplateDrivenFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleTemplateDrivenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
