import { Request, Response } from 'express';
import persons from '../mocks/person.mock-data';

export default function getItems(req: Request, res: Response): void {
  const result = {
    success: true,
    data: persons,
  };

  res.json(result);
}
