import { City } from './city.model';
import { ITEMS_MOCK_DATA } from '../../data/mocks/city.mock-data';
import { BACKEND_MOCK_SUFFIX } from '../../shared/constants/routes/backend-mock.constants';
import { CityRepositoryInterface, PaginatedCityResult } from './city.repository.interface';

interface Filters {
  page?: number;
  size?: number;
  sort?: string;
  name?: string;
  code?: string;
  areaMin?: number;
  areaMax?: number;
  populationMin?: number;
  populationMax?: number;
  countriesCountMin?: number;
  countriesCountMax?: number;
  densityMin?: number;
  densityMax?: number;
}

export default class MockRepository implements CityRepositoryInterface {
  private items: City[];

  constructor() {
    this.items = JSON.parse(JSON.stringify(ITEMS_MOCK_DATA)) as City[];
  }

  async getItems(filters: Filters = {}): Promise<PaginatedCityResult> {
    const {
      page = 1,
      size = 10,
      sort = '-name',
      name = '',
      code = '',
      areaMin = null,
      areaMax = null,
      populationMin = null,
      populationMax = null,
      countriesCountMin = null,
      countriesCountMax = null,
      densityMin = null,
      densityMax = null,
    } = filters;

    const currentPage = Math.max(1, Number(page));
    const perPage = Math.max(1, Number(size));
    const offset = (currentPage - 1) * perPage;

    let filteredItems = [...this.items];

    if (name) {
      filteredItems = filteredItems.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
    }

    if (code) {
      filteredItems = filteredItems.filter(item => item.code.toLowerCase().includes(code.toLowerCase()));
    }

    if (areaMin !== null) {
      filteredItems = filteredItems.filter(item => Number(item.area) >= areaMin);
    }
    if (areaMax !== null) {
      filteredItems = filteredItems.filter(item => Number(item.area) <= areaMax);
    }

    if (populationMin !== null) {
      filteredItems = filteredItems.filter(item => Number(item.population) >= populationMin);
    }
    if (populationMax !== null) {
      filteredItems = filteredItems.filter(item => Number(item.population) <= populationMax);
    }

    if (countriesCountMin !== null) {
      filteredItems = filteredItems.filter(item => Number(item.countriesCount) >= countriesCountMin);
    }
    if (countriesCountMax !== null) {
      filteredItems = filteredItems.filter(item => Number(item.countriesCount) <= countriesCountMax);
    }

    if (densityMin !== null) {
      filteredItems = filteredItems.filter(item => Number(item.density) >= densityMin);
    }
    if (densityMax !== null) {
      filteredItems = filteredItems.filter(item => Number(item.density) <= densityMax);
    }

    const sortField = sort.replace(/^-/, '') as keyof City;
    const sortOrder = sort.startsWith('-') ? -1 : 1;

    filteredItems.sort((itemA, itemB) => {
      const valueA = itemA[sortField];
      const valueB = itemB[sortField];

      if (valueA < valueB) { return -1 * sortOrder; }
      if (valueA > valueB) { return 1 * sortOrder; }

      return 0;
    });

    const totalItems = filteredItems.length;
    const totalPages = Math.ceil(totalItems / perPage);

    const data = filteredItems.slice(offset, offset + perPage).map(item => ({
      ...item,
      name: `${item.name}-${BACKEND_MOCK_SUFFIX}`,
    }));

    return {
      metadata: {
        pagination: {
          currentPage: currentPage,
          perPage: perPage,
          totalItems: totalItems,
          totalPages: totalPages,
        },
      },
      data: data,
    };
  }

  async getItemById(id: number): Promise<City | null> {
    return this.items.find(item => item.id === id) || null;
  }

  async createItem(data: City): Promise<City> {
    const { id, ...rest } = data;
    const newItem: City = { id: this.items.length + 1, ...rest };
    this.items.push(newItem);

    return newItem;
  }

  async updateItem(id: number, data: City): Promise<City> {
    const index = this.items.findIndex(item => item.id === id);
    if (index === -1) { throw new Error('Item not found'); }

    this.items[index] = { ...this.items[index], ...data };

    return this.items[index];
  }

  async deleteItem(id: number): Promise<void> {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  async existsByName(name: string): Promise<boolean> {
    return this.items.some(item => item.name.toLowerCase() === name.toLowerCase());
  }
}
