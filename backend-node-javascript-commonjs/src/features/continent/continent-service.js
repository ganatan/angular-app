'use strict';

class ContinentService {

  constructor(continentRepository) {
    this.continentRepository = continentRepository;
  }

  getItems = async (req) => {
    const items = await this.continentRepository.getItems(req);
    if (!items) {
      return [];
    }

    return items;
  };

  getItem = async (index) => {
    const continent = await this.continentRepository.getItem(index);

    return continent;
  };

  createItem = async (continentData) => {
    const res = await this.continentRepository.createItem(continentData);

    return res;
  };

  updateItem = async (id, continentData) => {
    return await this.continentRepository.updateItem(id, continentData);
  };

  deleteItem = async (id) => {
    const res = await this.continentRepository.deleteItem(id);

    return res;
  };

};

module.exports = ContinentService;
