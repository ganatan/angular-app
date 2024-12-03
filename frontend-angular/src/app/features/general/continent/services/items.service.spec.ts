import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ItemsService } from './items.service';
import { of, throwError } from 'rxjs';
import { ItemsResponse } from './item';

describe('ItemsService', () => {
  let service: ItemsService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ItemsService]
    });

    service = TestBed.inject(ItemsService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should build query params correctly', () => {
    const filters = {
      page: 1,
      limit: 10,
      name: 'Africa',
      areaMin: 1000000,
      sort: 'name'
    };

    const params = service['buildQueryParams'](filters);
    expect(params).toContain('page=1');
    expect(params).toContain('limit=10');
    expect(params).toContain('name=Africa');
    expect(params).toContain('areaMin=1000000');
    expect(params).toContain('sort=name');
  });

  it('should handle error response correctly', () => {
    spyOn(httpClient, 'get').and.returnValue(throwError(new Error('Network error')));

    service.getItems().subscribe(response => {
      expect(response).toEqual(service['getDefaultResponse']());
    });

    expect(httpClient.get).toHaveBeenCalled();
  });

  it('should return default response on error', () => {
    spyOn(httpClient, 'get').and.returnValue(throwError(new Error('Network error')));

    service.getItems().subscribe(response => {
      expect(response).toEqual({
        paginationTotals: { count: 0, area: 0, population: 0, countriesNumber: 0, density: 0 },
        allTotals: { count: 0, area: 0, population: 0, countriesNumber: 0, density: 0 },
        continents: []
      });
    });
  });

  it('should get items successfully', () => {
    const mockResponse: ItemsResponse = {
      paginationTotals: { count: 1, area: 1000000, population: 500000, countriesNumber: 10, density: 50 },
      allTotals: { count: 1, area: 1000000, population: 500000, countriesNumber: 10, density: 50 },
      continents: [{ id: 1, name: 'Africa', code: 'AF', area: 1000000, population: 500000, countriesNumber: 10, wikipediaLink: '', density: 50 }]
    };

    spyOn(httpClient, 'get').and.returnValue(of(mockResponse));

    service.getItems().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    expect(httpClient.get).toHaveBeenCalled();
  });
});


