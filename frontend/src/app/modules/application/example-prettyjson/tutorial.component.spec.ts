import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { TutorialComponent } from './tutorial.component';
import { PrettyJsonPipe } from './pretty-json.pipe';

describe('ExamplePrismComponent', () => {
  let component: TutorialComponent;
  let fixture: ComponentFixture<TutorialComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      declarations: [
        TutorialComponent,
        PrettyJsonPipe
      ],
      providers: [
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
