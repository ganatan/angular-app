'use strict';

const { ObjectId } = require('mongodb');

class MongoDBAdapter {
  constructor(dbClient) {
    this.dbClient = dbClient;
  }

  async getItems() {
    const query = {
      type: 'find',
      collectionName: 'continent',
      filter: {},
    };
    const result = await this.dbClient.query(query);
/*
    const collection = this.dbClient.collection(query.collectionName);
    const result2 = await collection.find(query.filter).toArray();
    */

    return result.map(item => ({
      id: item._id,
      code: item.code,
      name: item.name,
      wikipediaLink: item.wikipedia_link,
      area: item.area,
      population: item.population,
      countriesNumber: item.countries_number,
    }));

    // return [{ name: 1111 }]
  }

  async getItem(index) {
    if (!ObjectId.isValid(index)) {
      return null;
    }

    const query = {
      type: 'find',
      collectionName: 'continent',
      filter: { _id: new ObjectId(index) },
    };

    const result = await this.dbClient.query(query);
    if (result && result.length > 0) {
      const data = result[0];

      return {
        id: data._id,
        code: data.code,
        name: data.name,
        wikipediaLink: data.wikipedia_link,
        area: data.area,
        population: data.population,
        countriesNumber: data.countries_number,
      };
    }

    return null;
  }

  async createItem(continentData) {
    const query = {
      type: 'insert',
      collectionName: 'continents',
      data: {
        code: continentData.code,
        name: continentData.name,
      },
    };
    const result = await this.dbClient.query(query);

    return result;
  }

  async updateItem(id, continentData) {
    const query = {
      type: 'update',
      collectionName: 'continents',
      filter: { _id: id },
      data: {
        code: continentData.code,
        name: continentData.name,
      },
    };

    return await this.dbClient.query(query);
  }

  async deleteItem(id) {
    const query = {
      type: 'delete',
      collectionName: 'continents',
      filter: { _id: id },
    };

    return await this.dbClient.query(query);
  }
}

module.exports = MongoDBAdapter;
