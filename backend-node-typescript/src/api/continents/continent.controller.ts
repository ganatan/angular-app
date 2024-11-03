import { Request, Response } from 'express';

export const getAllContinents = (req: Request, res: Response) => {
  res.json({ message: 'Tous les continents' });
};

export const getContinent = (req: Request, res: Response) => {
  res.json({ message: `Continent avec l'id ${req.params.id}` });
};

export const createContinent = (req: Request, res: Response) => {
  res.json({ message: 'Nouveau continent créé' });
};

export const updateContinent = (req: Request, res: Response) => {
  res.json({ message: `Continent avec l'id ${req.params.id} mis à jour` });
};

export const deleteContinent = (req: Request, res: Response) => {
  res.json({ message: `Continent avec l'id ${req.params.id} supprimé` });
};
