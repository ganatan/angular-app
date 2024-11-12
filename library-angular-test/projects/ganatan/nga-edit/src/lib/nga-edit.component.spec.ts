import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgaEditComponent } from './nga-edit.component';

describe('NgaEditComponent', () => {
  let component: NgaEditComponent;
  let fixture: ComponentFixture<NgaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgaEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
