import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteComponent } from './website.component';

describe('MappingComponent', () => {
  let component: WebsiteComponent;
  let fixture: ComponentFixture<WebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
