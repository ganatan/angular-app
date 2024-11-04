import { Continent } from './continent.model';
import { mockContinents } from './continent.mock';

export class ContinentRepository {

  async findAll(): Promise<Continent[]> {
    return mockContinents;
  }
}
