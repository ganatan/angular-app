import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsComponent } from './components.component';
import { SmartphoneComponent } from './smartphone/smartphone.component';

describe('ComponentsComponent', () => {
  let component: ComponentsComponent;
  let fixture: ComponentFixture<ComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SmartphoneComponent,
        ComponentsComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
