import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { TutorialComponent } from './tutorial.component';
import { ItemService } from './item.service';
import { Item } from './item';

describe('TutorialComponent', () => {
  let component: TutorialComponent;
  let fixture: ComponentFixture<TutorialComponent>;
  let itemService: jasmine.SpyObj<ItemService>;
  const mockItem: Item = {
    id: 1,
    code: 'EU',
    name: 'Europe',
    wikipediaLink: 'https://example.com',
    area: 1000,
    population: 5000000,
    countriesNumber: 50,
    density: 200,
  };

  beforeEach(async () => {
    const itemServiceSpy = jasmine.createSpyObj('ItemService', ['getItem', 'updateItem', 'deleteItem', 'createItem']);
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      declarations: [TutorialComponent],
      providers: [
        { provide: ItemService, useValue: itemServiceSpy },
        {
          provide: ActivatedRoute,
          useValue: { params: of({ id: '1' }) },
        },
      ],
    }).compileComponents();

    itemService = TestBed.inject(ItemService) as jasmine.SpyObj<ItemService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('#getItemById', () => {
    it('should call getItem if id is defined', () => {
      itemService.getItem.and.returnValue(of(mockItem));
      component.getItemById();
      expect(itemService.getItem).toHaveBeenCalledWith(1);
    });
  });

  describe('#getItem', () => {
    it('should set form values when an item is retrieved', () => {
      itemService.getItem.and.returnValue(of(mockItem));
      component.getItem(1);
      expect(itemService.getItem).toHaveBeenCalledWith(1);
      expect(component.formItem.value).toEqual(mockItem);
    });
  });

  describe('#setForm', () => {
    it('should set the form with item values', () => {
      component.setForm(component.formItem, mockItem);
      expect(component.formItem.value).toEqual(mockItem);
    });
  });

  describe('#onCreate', () => {
    it('should reset the form when onCreate is called', () => {
      component.onCreate();
      expect(component.formItem.value.id).toBeNull();
    });
  });

  describe('#onCopy', () => {
    it('should set id to 0 when onCopy is called', () => {
      component.formItem.patchValue({ id: 5 });
      component.onCopy();
      expect(component.formItem.value.id).toBe(0);
    });
  });

});
