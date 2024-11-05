import { Request, Response } from 'express';
import { ContinentService } from './continent.service';
import { ContinentRepository } from './continent.repository';

export class ContinentController {
  constructor(private continentService: ContinentService) { }

  async getItems(req: Request, res: Response): Promise<void> {
    const continents = await this.continentService.getItems();
    res.json(continents);
  }

}

const continentRepository = new ContinentRepository();
const continentService = new ContinentService(continentRepository);
export const continentController = new ContinentController(continentService);
