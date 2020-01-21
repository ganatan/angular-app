import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletFeatureComponent } from './leaflet-feature.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

describe('LeafletFeatureComponent', () => {
  let component: LeafletFeatureComponent;
  let fixture: ComponentFixture<LeafletFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        LeafletModule,
      ],
      declarations: [ LeafletFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafletFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
