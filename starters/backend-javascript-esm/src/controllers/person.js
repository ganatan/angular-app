import persons from '../data/persons.js';

export function getItems(req, res) {
  res.json(persons);
}
