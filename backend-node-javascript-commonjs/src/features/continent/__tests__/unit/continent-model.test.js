'use strict';

const Continent = require('../../continent-model');

describe('Continent Model', () => {
  test('should create a continent instance with correct properties', () => {
    // Arrange-Act-Assert (AAA) pattern
    const id = 1000;
    const code = 'AF';
    const name = 'Africa';
    const wikipediaLink = 'https://en.wikipedia.org/wiki/Africa';
    const area = 30370000;
    const population = 1393676444;
    const countriesNumber = 61;

    const continent = new Continent(id, code, name, wikipediaLink, area, population, countriesNumber);

    expect(continent.id).toBe(id);
    expect(continent.code).toBe(code);
    expect(continent.name).toBe(name);
    expect(continent.wikipediaLink).toBe(wikipediaLink);
    expect(continent.area).toBe(area);
    expect(continent.population).toBe(population);
    expect(continent.countriesNumber).toBe(countriesNumber);
  });
});
