'use strict';

jest.mock('../../mocks/city.mock-data', () => []);

const service = require('../../services/city.service');

describe('City Service', () => {
  beforeEach(() => {
    // Remettre à zéro les items avant chaque test
    const mockItems = require('../../mocks/city.mock-data');
    mockItems.length = 0;
  });

  it('should return empty items initially', () => {
    const items = service.getItems();
    expect(items).toEqual([]);
  });

  it('should create a new city item', () => {
    const newCity = { name: 'Paris' };

    const createdItem = service.create(newCity);
    const items = service.getItems();

    expect(createdItem).toEqual({ id: 1, name: 'Paris' });
    expect(items).toHaveLength(1);
    expect(items[0]).toEqual(createdItem);
  });

  it('should increment id when creating multiple cities', () => {
    const city1 = { name: 'Paris' };
    const city2 = { name: 'New York' };

    service.create(city1);
    service.create(city2);

    const items = service.getItems();

    expect(items).toHaveLength(2);
    expect(items[0]).toEqual({ id: 1, name: 'Paris' });
    expect(items[1]).toEqual({ id: 2, name: 'New York' });
  });
});
