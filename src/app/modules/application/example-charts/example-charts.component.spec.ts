import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleChartsComponent } from './example-charts.component';
import { ChartsModule } from 'ng2-charts';

describe('ExampleChartsComponent', () => {
  let component: ExampleChartsComponent;
  let fixture: ComponentFixture<ExampleChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ChartsModule,
      ],
      declarations: [ ExampleChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
