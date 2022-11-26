import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { TutorialComponent } from './tutorial.component';
import { ModalEbookService } from './modal-ebook/modal-ebook.service';
import { ModalEbookModule } from './modal-ebook/modal-ebook.module';

describe('ExampleModalComponent', () => {
  let component: TutorialComponent;
  let fixture: ComponentFixture<TutorialComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ModalEbookModule
      ],
      declarations: [
        TutorialComponent,
      ],
      providers: [
        ModalEbookService
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
