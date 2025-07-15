import { City } from './city.model';
import { ITEMS_MOCK_DATA } from '../../data/mocks/city.mock-data';
import { BACKEND_MOCK_SUFFIX } from '../../shared/constants/routes/backend-mock.constants';

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

interface PaginationMetadata {
  pagination: {
    currentPage: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
  };
}

interface PaginatedResult {
  metadata: PaginationMetadata;
  data: City[];
}

export default class MockRepository {
  private items: City[];

  constructor() {
    this.items = JSON.parse(JSON.stringify(ITEMS_MOCK_DATA)) as City[];
  }

  async getItems(filters: Filters = {}): Promise<PaginatedResult> {
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
      filteredItems = filteredItems.filter(item =>
        item.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (code) {
      filteredItems = filteredItems.filter(item =>
        item.code.toLowerCase().includes(code.toLowerCase())
      );
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

    filteredItems.sort((a, b) => {
      const valueA = a[sortField];
      const valueB = b[sortField];

      if (valueA < valueB) return -1 * sortOrder;
      if (valueA > valueB) return 1 * sortOrder;
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
          currentPage,
          perPage,
          totalItems,
          totalPages,
        },
      },
      data,
    };
  }

  // async getItemById(id: number): Promise<City | null> {
  //   return this.items.find(item => item.id === id) || null;
  // }

  // async createItem(data: City): Promise<City> {
  //   const newItem = { id: this.items.length + 1, ...data };
  //   this.items.push(newItem);
  //   return newItem;
  // }

  // async updateItem(id: number, data: Partial<City>): Promise<City | null> {
  //   const index = this.items.findIndex(item => item.id === id);
  //   if (index === -1) return null;

  //   this.items[index] = { ...this.items[index], ...data };
  //   return this.items[index];
  // }

  // async deleteItem(id: number): Promise<City | null> {
  //   const index = this.items.findIndex(item => item.id === id);
  //   if (index === -1) return null;

  //   return this.items.splice(index, 1)[0] || null;
  // }

  // async existsByName(name: string): Promise<boolean> {
  //   return this.items.some(
  //     item => item.name.toLowerCase() === name.toLowerCase()
  //   );
  // }
}
