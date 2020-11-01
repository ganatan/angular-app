import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { SearchBarModule } from './search-bar/search-bar.module';
import { SearchResultModule } from './search-result/search-result.module';
import { SearchResultRoutingModule } from './search-result/search-result-routing.module';
import { GridImagesModule } from './grid-images/grid-images.module';
import { PaginationModule } from './pagination/pagination.module';
import { ConfigService } from './config/config.service';

import { MoviesImagesListComponent } from './movies-images-list.component';

describe('MoviesImagesListComponent', () => {
  let component: MoviesImagesListComponent;
  let fixture: ComponentFixture<MoviesImagesListComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        FormsModule,
        SearchBarModule,
        SearchResultModule,
        SearchResultRoutingModule,
        GridImagesModule,
        PaginationModule,
      ],
      providers: [
        ConfigService,
      ],
      declarations: [
        MoviesImagesListComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesImagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
