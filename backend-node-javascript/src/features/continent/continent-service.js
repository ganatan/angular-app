class ContinentService {

  constructor(repository) {
    this.repository = repository;
  }

  getItems = async (req) => {
    const items = await this.repository.getItems(req);
    if (!items) {
      return [];
    }

    return items;
  };

  getItem = async (index) => {
    const continent = await this.repository.getItem(index);

    return continent;
  };

  createItem = async (continentData) => {
    const res = await this.repository.createItem(continentData);

    return res;
  };

  updateItem = async (id, continentData) => {
    return await this.repository.updateItem(id, continentData);
  };

  deleteItem = async (id) => {
    const res = await this.repository.deleteItem(id);

    return res;
  };

};

export default ContinentService;
