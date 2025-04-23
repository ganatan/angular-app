import persons from '../data/persons.js';

export function getItems(req, res) {
  const result = {
    success: true,
    data: persons,
  };

  res.json(result);
}
