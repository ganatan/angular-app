import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceComponent } from './exercice.component';
import { ItemsService } from './items.service';
import { HttpClientModule } from '@angular/common/http';

describe('in-memory-web-from-service - Component', () => {
  let component: ExerciceComponent;
  let fixture: ComponentFixture<ExerciceComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [ItemsService],
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
