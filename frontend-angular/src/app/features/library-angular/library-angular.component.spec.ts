import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryAngularComponent } from './library-angular.component';
import { CommonModule } from '@angular/common';
import { NgaEditComponent } from '@ganatan-angular/nga-edit';
import { NgaTableComponent } from '@ganatan-angular/nga-table';

describe('LibraryAngularComponent', () => {
  let component: LibraryAngularComponent;
  let fixture: ComponentFixture<LibraryAngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibraryAngularComponent],
      imports: [
        CommonModule,
        NgaEditComponent,
        NgaTableComponent,
      ]      
    });
    fixture = TestBed.createComponent(LibraryAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
