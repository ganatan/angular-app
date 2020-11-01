import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceComponent } from './exercice.component';

describe('ExerciceComponent', () => {
  let component: ExerciceComponent;
  let fixture: ComponentFixture<ExerciceComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ExerciceComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
