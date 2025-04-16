import { fn, col, where } from 'sequelize';
import Profession from './profession.model.mysql-sequelize.js';

class MysqlSequelizeRepository {
  async getItems({ page = 1, size = 100 } = {}) {
    console.log('00000000001:MysqlSequelizeRepository');
    const offset = (page - 1) * size;
    const { count, rows } = await Profession.findAndCountAll({
      offset: offset,
      limit: size,
      raw: true,
    });

    return {
      metadata: {
        pagination: {
          currentPage: page,
          perPage: size,
          totalItems: count,
          totalPages: Math.ceil(count / size),
        },
      },
      data: rows,
    };
  }

  async getItemById(id) {
    if (!Number.isInteger(id) || id <= 0) {
      throw new Error('Invalid id');
    }

    return await Profession.findByPk(id, { raw: true });
  }

  async createItem(data) {
    const created = await Profession.create(data);

    return created.get({ plain: true });
  }

  async updateItem(id, data) {
    if (!Number.isInteger(id) || id <= 0) {
      throw new Error('Invalid id');
    }

    const [updatedCount] = await Profession.update(data, { where: { id } });
    if (updatedCount === 0) { return null; }

    return await this.getItemById(id);
  }

  async deleteItem(id) {
    const item = await this.getItemById(id);
    if (!item) { return null; }

    await Profession.destroy({ where: { id } });

    return item;
  }

  async existsByName(name) {
    const found = await Profession.findOne({
      where: where(fn('LOWER', col('name')), name.toLowerCase()),
    });

    return Boolean(found);
  }
}

export default MysqlSequelizeRepository;
