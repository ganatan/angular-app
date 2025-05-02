import items from '../mocks/city.mock-data';
import type { City } from '../mocks/city.mock-data';
import type { CityInput } from '../schemas/city.schema';

class Service {
  getItems(): City[] {
    return items;
  }

  create(cityData: CityInput): City {
    const newItem: City = { id: items.length + 1, ...cityData };
    items.push(newItem);

    return newItem;
  }
}

export default new Service();
