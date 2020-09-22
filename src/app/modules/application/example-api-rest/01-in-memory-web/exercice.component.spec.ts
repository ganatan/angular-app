import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceComponent } from './exercice.component';
import { HttpClientModule } from '@angular/common/http';

describe('in-memory-web - Component', () => {
  let component: ExerciceComponent;
  let fixture: ComponentFixture<ExerciceComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [],
      imports: [HttpClientModule],
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
