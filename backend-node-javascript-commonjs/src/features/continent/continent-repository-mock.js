'use strict';

const itemsData = require('../../../data/mock/continent-mock.json');

class MockAdapter {
  constructor(dbClient) {
    this.dbClient = dbClient;
    this.items = itemsData;
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

      let filteredItems = this.items;

      if (name) {
        filteredItems = filteredItems.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
      }

      if (code) {
        filteredItems = filteredItems.filter(item => item.code.toLowerCase().includes(code.toLowerCase()));
      }

      if (areaMin !== null) {
        filteredItems = filteredItems.filter(item => item.area >= parseInt(areaMin, 10));
      }
      if (areaMax !== null) {
        filteredItems = filteredItems.filter(item => item.area <= parseInt(areaMax, 10));
      }

      if (populationMin !== null) {
        filteredItems = filteredItems.filter(item => item.population >= parseInt(populationMin, 10));
      }
      if (populationMax !== null) {
        filteredItems = filteredItems.filter(item => item.population <= parseInt(populationMax, 10));
      }

      if (countriesNumberMin !== null) {
        filteredItems = filteredItems.filter(item => item.countriesNumber >= parseInt(countriesNumberMin, 10));
      }
      if (countriesNumberMax !== null) {
        filteredItems = filteredItems.filter(item => item.countriesNumber <= parseInt(countriesNumberMax, 10));
      }

      if (densityMin !== null) {
        filteredItems = filteredItems.filter(item => (item.population / item.area) >= parseFloat(densityMin));
      }
      if (densityMax !== null) {
        filteredItems = filteredItems.filter(item => (item.population / item.area) <= parseFloat(densityMax));
      }

      const sortOrder = sort.startsWith('-') ? -1 : 1;
      const sortBy = sort.startsWith('-') ? sort.substring(1) : sort;

      filteredItems.sort((itema, itemb) => {
        if (itema[sortBy] < itemb[sortBy]) { return -1 * sortOrder; };
        if (itema[sortBy] > itemb[sortBy]) { return 1 * sortOrder; };

        return 0;
      });

      const paginatedItems = filteredItems.slice(offset, offset + validLimit);

      paginatedItems.forEach(item => {
        item.density = item.area ? (item.population / item.area).toFixed(2) : 0;
      });

      const totals = this.calculateTotals(filteredItems);
      const paginationTotals = this.calculateTotals(paginatedItems);

      return {
        paginationTotals: {
          count: paginatedItems.length,
          ...paginationTotals,
        },
        allTotals: {
          count: filteredItems.length,
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
    const result = this.items.find(item => item.id === parseInt(id, 10));

    return result || null;
  }

  async createItem(itemData) {
    const newId = this.items.length ? Math.max(...this.items.map(cont => cont.id)) + 1 : 1;
    const newItem = { id: newId, ...itemData };
    this.items.push(newItem);

    return newItem;
  }

  async updateItem(id, itemData) {
    const index = this.items.findIndex(cont => cont.id === parseInt(id, 10));
    if (index === -1) { return null; };

    this.items[index] = { ...this.items[index], ...itemData };

    return this.items[index];
  }

  async deleteItem(id) {
    const index = this.items.findIndex(cont => cont.id === parseInt(id, 10));
    if (index === -1) { return null; };

    const deletedItem = this.items.splice(index, 1);

    return deletedItem[0];
  }
}

module.exports = MockAdapter;
