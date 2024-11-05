import { Continent } from './continent.model';
import { mockContinents } from './continent.mock';

export class ContinentRepository {

  async getItems(): Promise<Continent[]> {
    return mockContinents;
  }
}
