import { PaginationService } from './pagination.service';
import { Pagination } from './pagination';

describe('PaginationService', () => {
  let service: PaginationService;

  beforeEach(() => {
    service = new PaginationService();
  });

  it('should initialize a Pagination object correctly', () => {
    // Arrange
    const perPage = 5;

    // Act
    const pagination: Pagination = service.initializePagination(perPage);
    
    // Assert
    expect(pagination).toEqual({
      totalItems: 0,
      currentPage: 1,
      perPage,
      totalPages: 0,
      startPage: 1,
      endPage: 1,
      pages: [],
      pageBrowser: false,
      useful: false
    });
  });

  it('should handle the case where currentPage is greater than the total number of pages', () => {
    // Arrange
    const input = {
      totalItems: 10,
      currentPage: 5,
      perPage: 5,
      totalPages: 2,
      startPage: 1,
      endPage: 2,
      pages: [1, 2],
      pageBrowser: true,
      useful: true
    };

    // Act
    const pagination = service.getPagination(input);

    // Assert
    expect(pagination.currentPage).toBe(1);
    expect(pagination.totalPages).toBe(2);
  });

  it('should handle a small number of pages (≤ 7 pages) correctly', () => {
    // Arrange
    const input = {
      totalItems: 25,
      currentPage: 3,
      perPage: 5,
      totalPages: 5,
      startPage: 1,
      endPage: 5,
      pages: [1, 2, 3, 4, 5],
      pageBrowser: true,
      useful: true
    };

    // Act
    const pagination = service.getPagination(input);

    // Assert
    expect(pagination.startPage).toBe(1);
    expect(pagination.endPage).toBe(5);
    expect(pagination.pages).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle the first pages with many total pages', () => {
    // Arrange
    const input = {
      totalItems: 100,
      currentPage: 3,
      perPage: 5,
      totalPages: 20,
      startPage: 1,
      endPage: 7,
      pages: [1, 2, 3, 4, 5, 6, 7],
      pageBrowser: true,
      useful: true
    };

    // Act
    const pagination = service.getPagination(input);

    // Assert
    expect(pagination.startPage).toBe(1);
    expect(pagination.endPage).toBe(7);
    expect(pagination.pages.length).toBe(7);
  });

  it('should handle the last pages with many total pages', () => {
    // Arrange
    const input = {
      totalItems: 100,
      currentPage: 18,
      perPage: 5,
      totalPages: 20,
      startPage: 14,
      endPage: 20,
      pages: [14, 15, 16, 17, 18, 19, 20],
      pageBrowser: true,
      useful: true
    };

    // Act
    const pagination = service.getPagination(input);

    // Assert
    expect(pagination.startPage).toBe(14);
    expect(pagination.endPage).toBe(20);
    expect(pagination.pages.length).toBe(7);
  });

  it('should handle middle pages with many total pages', () => {
    // Arrange
    const input = {
      totalItems: 100,
      currentPage: 10,
      perPage: 5,
      totalPages: 20,
      startPage: 8,
      endPage: 14,
      pages: [8, 9, 10, 11, 12, 13, 14],
      pageBrowser: true,
      useful: true
    };

    // Act
    const pagination = service.getPagination(input);

    // Assert
    expect(pagination.startPage).toBe(8);
    expect(pagination.endPage).toBe(14);
    expect(pagination.pages.length).toBe(7);
  });

  it('should generate a correct array of numbers with range()', () => {
    // Arrange
    const start = 1;
    const end = 5;

    // Act
    const result = (service as any).range(start, end);

    // Assert
    expect(result).toEqual([1, 2, 3, 4]);
  });
});
