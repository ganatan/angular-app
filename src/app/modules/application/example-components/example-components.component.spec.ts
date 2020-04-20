import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleComponentsComponent } from './example-components.component';
import { SmartphoneComponent } from './smartphone/smartphone.component';

describe('ExampleComponentsComponent', () => {
  let component: ExampleComponentsComponent;
  let fixture: ComponentFixture<ExampleComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExampleComponentsComponent,
        SmartphoneComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
