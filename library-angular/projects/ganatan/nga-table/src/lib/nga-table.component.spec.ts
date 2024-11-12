import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgaTableComponent } from './nga-table.component';

describe('NgaTableComponent', () => {
  let component: NgaTableComponent;
  let fixture: ComponentFixture<NgaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgaTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
