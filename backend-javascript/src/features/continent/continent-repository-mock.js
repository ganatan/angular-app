/*
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const continentsData = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../../data/mock/continent-mock.json'), 'utf-8'));
*/

import fs from 'fs';
import path from 'path';

const baseDir = process.cwd();
const filePath = path.join(baseDir, 'data/mock/continent-mock.json');

const continentsData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

class MockAdapter {
  constructor(dbClient) {
    this.dbClient = dbClient;
    this.continents = continentsData;
  }

  async getMockTrace() {
    return null;
  }

  async getItems(req) {
    try {
      const {
        name = '',
        code = '',
        areaMin = null,
        areaMax = null,
        populationMin = null,
        populationMax = null,
        countriesNumberMin = null,
        countriesNumberMax = null,
        densityMin = null,
        densityMax = null,
        page = 1,
        limit = 10,
        sort = 'name',
      } = req.query;

      const validPage = page > 0 ? parseInt(page, 10) : 1;
      const validLimit = limit > 0 ? parseInt(limit, 10) : 10;
      const offset = (validPage - 1) * validLimit;

      let filteredContinents = this.continents;

      if (name) {
        filteredContinents = filteredContinents.filter(continent => continent.name.toLowerCase().includes(name.toLowerCase()));
      }

      if (code) {
        filteredContinents = filteredContinents.filter(continent => continent.code.toLowerCase().includes(code.toLowerCase()));
      }

      if (areaMin !== null) {
        filteredContinents = filteredContinents.filter(continent => continent.area >= parseInt(areaMin, 10));
      }
      if (areaMax !== null) {
        filteredContinents = filteredContinents.filter(continent => continent.area <= parseInt(areaMax, 10));
      }

      if (populationMin !== null) {
        filteredContinents = filteredContinents.filter(continent => continent.population >= parseInt(populationMin, 10));
      }
      if (populationMax !== null) {
        filteredContinents = filteredContinents.filter(continent => continent.population <= parseInt(populationMax, 10));
      }

      if (countriesNumberMin !== null) {
        filteredContinents = filteredContinents.filter(continent => continent.countriesNumber >= parseInt(countriesNumberMin, 10));
      }
      if (countriesNumberMax !== null) {
        filteredContinents = filteredContinents.filter(continent => continent.countriesNumber <= parseInt(countriesNumberMax, 10));
      }

      if (densityMin !== null) {
        filteredContinents = filteredContinents.filter(continent => (continent.population / continent.area) >= parseFloat(densityMin));
      }
      if (densityMax !== null) {
        filteredContinents = filteredContinents.filter(continent => (continent.population / continent.area) <= parseFloat(densityMax));
      }

      const sortOrder = sort.startsWith('-') ? -1 : 1;
      const sortBy = sort.startsWith('-') ? sort.substring(1) : sort;

      filteredContinents.sort((itema, itemb) => {
        if (itema[sortBy] < itemb[sortBy]) { return -1 * sortOrder; };
        if (itema[sortBy] > itemb[sortBy]) { return 1 * sortOrder; };

        return 0;
      });

      const paginatedContinents = filteredContinents.slice(offset, offset + validLimit);

      paginatedContinents.forEach(continent => {
        continent.density = continent.area ? (continent.population / continent.area).toFixed(2) : 0;
      });

      const totals = this.calculateTotals(filteredContinents);
      const paginationTotals = this.calculateTotals(paginatedContinents);

      return {
        paginationTotals: {
          count: paginatedContinents.length,
          ...paginationTotals,
        },
        allTotals: {
          count: filteredContinents.length,
          ...totals,
        },
        continents: paginatedContinents,
      };

    } catch (error) {
      console.error('Error retrieving mock continents:', error);

      return null;
    }
  }

  calculateTotals(continents) {
    const totalArea = continents.reduce((sum, continent) => sum + continent.area, 0);
    const totalPopulation = continents.reduce((sum, continent) => sum + continent.population, 0);
    const totalCountries = continents.reduce((sum, continent) => sum + continent.countriesNumber, 0);
    const averageDensity = totalArea ? (totalPopulation / totalArea).toFixed(2) : 0;

    return {
      area: totalArea,
      population: totalPopulation,
      countriesNumber: totalCountries,
      density: parseFloat(averageDensity),
    };
  }

  async getItem(id) {
    const continent = this.continents.find(cont => cont.id === parseInt(id, 10));

    return continent || null;
  }

  async createItem(continentData) {
    const newId = this.continents.length ? Math.max(...this.continents.map(cont => cont.id)) + 1 : 1;
    const newContinent = { id: newId, ...continentData };
    this.continents.push(newContinent);

    return newContinent;
  }

  async updateItem(id, continentData) {
    const index = this.continents.findIndex(cont => cont.id === parseInt(id, 10));
    if (index === -1) { return null; };

    this.continents[index] = { ...this.continents[index], ...continentData };

    return this.continents[index];
  }

  async deleteItem(id) {
    const index = this.continents.findIndex(cont => cont.id === parseInt(id, 10));
    if (index === -1) { return null; };

    const deletedContinent = this.continents.splice(index, 1);

    return deletedContinent[0];
  }
}

export default MockAdapter;
