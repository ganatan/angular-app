'use strict';

class ItemController {
  constructor(service) {
    this.service = service;
    this.getItems = this.getItems.bind(this);
    this.getItemImage = this.getItemImage.bind(this);
  }

  async getItems(req, res, next) {
    try {
      const { query } = req;
      const items = await this.service.getItems(query);
      res.locals.data = items;

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async getItemImage(req, res, next) {
    try {
      const { name } = req.params;
      const imagePath = await this.service.getItemImagePath(name);

      if (!imagePath) {
        return res.status(404).send('Image not found');
      }

      return res.sendFile(imagePath, (err) => {
        if (err) { return next(err); };
      });
    } catch (error) {
      return next(error);
    }
  }

}

module.exports = ItemController;
