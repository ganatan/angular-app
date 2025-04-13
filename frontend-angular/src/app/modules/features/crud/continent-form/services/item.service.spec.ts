import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ItemService } from './item.service';
import { Item } from './item';

describe('ItemService', () => {
  let service: ItemService;
  let httpMock: HttpTestingController;

  const mockItem: Item = {
    id: 1,
    code: 'TEST',
    name: 'Test Continent',
    wikipediaLink: 'https://example.com',
    area: 12345,
    population: 1000000,
    countriesCount: 10,
    density: 80,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ItemService],
    });
    service = TestBed.inject(ItemService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getItem', () => {
    it('should retrieve an item by id', () => {
      service.getItem(mockItem.id).subscribe(item => {
        expect(item).toEqual(mockItem);
      });

      const req = httpMock.expectOne(`${service.backendUrl}/continents/${mockItem.id}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockItem);
    });

    it('should handle error for getItem', () => {
      service.getItem(mockItem.id).subscribe(item => {
        expect(item).toEqual({
          id: 0,
          code: '',
          name: '',
          wikipediaLink: '',
          area: 0,
          population: 0,
          countriesCount: 0,
          density: 0,
        });
      });

      const req = httpMock.expectOne(`${service.backendUrl}/continents/${mockItem.id}`);
      req.flush('Error', { status: 404, statusText: 'Not Found' });
    });
  });

  describe('#updateItem', () => {
    it('should update an item', () => {
      service.updateItem(mockItem).subscribe(item => {
        expect(item).toEqual(mockItem);
      });

      const req = httpMock.expectOne(`${service.backendUrl}/continents/${mockItem.id}`);
      expect(req.request.method).toBe('PUT');
      req.flush(mockItem);
    });

    it('should handle error for updateItem', () => {
      service.updateItem(mockItem).subscribe(item => {
        expect(item).toEqual(mockItem);
      });

      const req = httpMock.expectOne(`${service.backendUrl}/continents/${mockItem.id}`);
      req.flush('Error', { status: 500, statusText: 'Server Error' });
    });
  });

  describe('#createItem', () => {
    it('should create a new item', () => {
      service.createItem(mockItem).subscribe(item => {
        expect(item).toEqual(mockItem);
      });

      const req = httpMock.expectOne(`${service.backendUrl}/continents`);
      expect(req.request.method).toBe('POST');
      req.flush(mockItem);
    });

    it('should handle error for createItem', () => {
      service.createItem(mockItem).subscribe(item => {
        expect(item).toEqual(mockItem);
      });

      const req = httpMock.expectOne(`${service.backendUrl}/continents`);
      req.flush('Error', { status: 400, statusText: 'Bad Request' });
    });
  });

  describe('#deleteItem', () => {
    it('should delete an item', () => {
      service.deleteItem(mockItem).subscribe(item => {
        expect(item).toEqual(mockItem);
      });

      const req = httpMock.expectOne(`${service.backendUrl}/continents/${mockItem.id}`);
      expect(req.request.method).toBe('DELETE');
      req.flush(mockItem);
    });

    it('should handle error for deleteItem', () => {
      service.deleteItem(mockItem).subscribe(item => {
        expect(item).toEqual(mockItem);
      });

      const req = httpMock.expectOne(`${service.backendUrl}/continents/${mockItem.id}`);
      req.flush('Error', { status: 404, statusText: 'Not Found' });
    });
  });
});




/*

import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ItemService } from './item.service';

describe('continent-form-ItemService', () => {
  let service: ItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(ItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

*/