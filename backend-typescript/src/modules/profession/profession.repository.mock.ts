import { ITEMS_MOCK_DATA } from '../../data/mocks/profession.mock-data';
import { BACKEND_MOCK_SUFFIX } from '../../shared/constants/routes/backend-mock.constants';

interface ProfessionItem {
  id: number;
  name: string;
  [key: string]: any;
}

interface GetItemsFilters {
  page?: number;
  size?: number;
  sort?: string;
  name?: string;
}

interface PaginationMetadata {
  pagination: {
    currentPage: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
  };
}

interface GetItemsResult {
  metadata: PaginationMetadata;
  data: ProfessionItem[];
}

class MockRepository {
  private items: ProfessionItem[];

  constructor() {
    this.items = JSON.parse(JSON.stringify(ITEMS_MOCK_DATA));
  }

  async getItems(filters: GetItemsFilters = {}): Promise<GetItemsResult> {
    const {
      page = 1,
      size = 10,
      sort = '-name',
      name = '',
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

    const sortField = sort.replace(/^-/, '');
    const sortOrder = sort.startsWith('-') ? -1 : 1;

    filteredItems.sort((itemA, itemB) => {
      const valueA = itemA[sortField];
      const valueB = itemB[sortField];
      if (valueA < valueB) return -1 * sortOrder;
      if (valueA > valueB) return 1 * sortOrder;
      return 0;
    });

    const totalItems = filteredItems.length;
    const totalPages = Math.ceil(totalItems / perPage);
    const data = filteredItems
      .slice(offset, offset + perPage)
      .map(item => ({ ...item, name: `${item.name} ${BACKEND_MOCK_SUFFIX}` }));

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

  async getItemById(id: number): Promise<ProfessionItem | null> {
    return this.items.find(item => item.id === id) || null;
  }

  async createItem(data: Partial<ProfessionItem>): Promise<ProfessionItem> {
    const newItem: ProfessionItem = {
      id: this.items.length + 1,
      ...data,
    } as ProfessionItem;

    this.items.push(newItem);
    return newItem;
  }

  async updateItem(id: number, data: Partial<ProfessionItem>): Promise<ProfessionItem | null> {
    const index = this.items.findIndex(item => item.id === id);
    if (index === -1) return null;

    this.items[index] = { ...this.items[index], ...data };
    return this.items[index];
  }

  async deleteItem(id: number): Promise<ProfessionItem | null> {
    const index = this.items.findIndex(item => item.id === id);
    if (index === -1) return null;

    return this.items.splice(index, 1)[0];
  }

  async existsByName(name: string): Promise<boolean> {
    return this.items.some(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
  }
}

export default MockRepository;
