import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleLeafletComponent } from './example-leaflet.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

describe('ExampleLeafletComponent', () => {
  let component: ExampleLeafletComponent;
  let fixture: ComponentFixture<ExampleLeafletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        LeafletModule,
      ],
      declarations: [ ExampleLeafletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleLeafletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
