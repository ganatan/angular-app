import fs from 'fs';
import path from 'path';

const baseDir = process.cwd();
const isProduction = process.env.NODE_ENV === 'production';

const filePath = isProduction
  ? path.join(baseDir, 'dist', 'data', 'mock', 'continent-mock.json')
  : path.join(baseDir, 'data', 'mock', 'continent-mock.json');

const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

class MockAdapter {
  constructor(dbClient) {
    this.dbClient = dbClient;
    this.data = data;
  }

  async getMockTrace() {
    return null;
  }

  async getItems(filters) {
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
      } = filters;

      const validPage = page > 0 ? parseInt(page, 10) : 1;
      const validLimit = limit > 0 ? parseInt(limit, 10) : 10;
      const offset = (validPage - 1) * validLimit;

      let filteredData = this.data;

      if (name) {
        filteredData = filteredData.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
      }

      if (code) {
        filteredData = filteredData.filter(item => item.code.toLowerCase().includes(code.toLowerCase()));
      }

      if (areaMin !== null) {
        filteredData = filteredData.filter(item => item.area >= parseInt(areaMin, 10));
      }
      if (areaMax !== null) {
        filteredData = filteredData.filter(item => item.area <= parseInt(areaMax, 10));
      }

      if (populationMin !== null) {
        filteredData = filteredData.filter(item => item.population >= parseInt(populationMin, 10));
      }
      if (populationMax !== null) {
        filteredData = filteredData.filter(item => item.population <= parseInt(populationMax, 10));
      }

      if (countriesNumberMin !== null) {
        filteredData = filteredData.filter(item => item.countriesNumber >= parseInt(countriesNumberMin, 10));
      }
      if (countriesNumberMax !== null) {
        filteredData = filteredData.filter(item => item.countriesNumber <= parseInt(countriesNumberMax, 10));
      }

      if (densityMin !== null) {
        filteredData = filteredData.filter(item => (item.population / item.area) >= parseFloat(densityMin));
      }
      if (densityMax !== null) {
        filteredData = filteredData.filter(item => (item.population / item.area) <= parseFloat(densityMax));
      }

      const sortOrder = sort.startsWith('-') ? -1 : 1;
      const sortBy = sort.startsWith('-') ? sort.substring(1) : sort;

      filteredData.sort((itema, itemb) => {
        if (itema[sortBy] < itemb[sortBy]) { return -1 * sortOrder; };
        if (itema[sortBy] > itemb[sortBy]) { return 1 * sortOrder; };

        return 0;
      });

      const paginatedItems = filteredData.slice(offset, offset + validLimit);

      paginatedItems.forEach(item => {
        item.density = item.area ? (item.population / item.area).toFixed(2) : 0;
      });

      const totals = this.calculateTotals(filteredData);
      const paginationTotals = this.calculateTotals(paginatedItems);

      return {
        paginationTotals: {
          count: paginatedItems.length,
          ...paginationTotals,
        },
        allTotals: {
          count: filteredData.length,
          ...totals,
        },
        continents: paginatedItems,
      };

    } catch (error) {
      console.error('Error retrieving mock continents:', error);

      return null;
    }
  }

  calculateTotals(items) {
    const totalArea = items.reduce((sum, item) => sum + item.area, 0);
    const totalPopulation = items.reduce((sum, item) => sum + item.population, 0);
    const totalCountries = items.reduce((sum, item) => sum + item.countriesNumber, 0);
    const averageDensity = totalArea ? (totalPopulation / totalArea).toFixed(2) : 0;

    return {
      area: totalArea,
      population: totalPopulation,
      countriesNumber: totalCountries,
      density: parseFloat(averageDensity),
    };
  }

  async getItem(id) {
    const item = this.data.find(cont => cont.id === parseInt(id, 10));

    return item || null;
  }

  async createItem(data) {
    const newId = this.data.length ? Math.max(...this.data.map(cont => cont.id)) + 1 : 1;
    const newItem = { id: newId, ...data };
    this.data.push(newItem);

    return newItem;
  }

  async updateItem(id, data) {
    const index = this.data.findIndex(cont => cont.id === parseInt(id, 10));
    if (index === -1) { return null; };

    this.data[index] = { ...this.data[index], ...data };

    return this.data[index];
  }

  async deleteItem(id) {
    const index = this.data.findIndex(cont => cont.id === parseInt(id, 10));
    if (index === -1) { return null; };

    const deletedItem = this.data.splice(index, 1);

    return deletedItem[0];
  }
}

export default MockAdapter;
