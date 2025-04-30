import pool from '../../../core/database/clients/mysql/native.client.js';

import {
  addFilterCondition,
  addRangeCondition,
  adaptSortField,
} from '../../../shared/utils/query/query-utils.js';

import {
  DEFAULT_ITEMS_PER_PAGE,
  DEFAULT_MIN_ENTITY_ID,
  MAX_ITEMS_PER_PAGE,
} from '../../../shared/constants/pagination/pagination.constants.js';
import { SORT_DIRECTION } from '../../../shared/constants/sort/sort.constants.js';

import { ITEM_CONSTANTS } from '../constants/profession.constant.js';

class MysqlRepository {
  async getItems(filters) {
    try {
      const {
        page = 1,
        size = DEFAULT_ITEMS_PER_PAGE,
        sort = 'name',
        name = '',
        idMin = null,
        idMax = null,
      } = filters;

      const currentPage = Math.max(1, parseInt(page, 10));
      const requestedSize = parseInt(size, 10);
      const perPage = Math.min(Math.max(1, requestedSize), MAX_ITEMS_PER_PAGE);
      const offset = (currentPage - 1) * perPage;

      let filterConditions = `WHERE (1 = 1) AND (id >= ${DEFAULT_MIN_ENTITY_ID})`;
      const filterParams = [];

      filterConditions = addFilterCondition(filterConditions, filterParams, 'name', name);
      filterConditions = addRangeCondition(filterConditions, filterParams, 'id', idMin, idMax);

      const sortMapping = {};
      let sortBy = adaptSortField(sort, sortMapping);
      const sortOrder = sort.startsWith('-') ? SORT_DIRECTION.DESC : SORT_DIRECTION.ASC;
      if (sort.startsWith('-')) {
        sortBy = sortBy.substring(1);
      }

      const sqlCount = this.buildQueryCount(filterConditions);
      const sqlData = this.buildQueryData(filterConditions, perPage, offset, sortBy, sortOrder);

      const [countRows] = await pool.query(sqlCount, filterParams);
      const [dataRows] = await pool.query(sqlData, filterParams);

      const global = countRows[0];

      return this.formatResultItems(dataRows, {
        currentPage: currentPage,
        perPage: perPage,
        totalItems: parseInt(global.count, 10),
      });
    } catch (error) {
      console.error(`Error retrieving ${ITEM_CONSTANTS.ITEMS_NAME}:`, error);

      return null;
    }
  }

  formatResultItems(data, { currentPage, perPage, totalItems }) {
    const totalPages = Math.ceil(totalItems / perPage);

    return {
      metadata: {
        pagination: {
          currentPage,
          perPage,
          totalItems,
          totalPages,
        },
      },
      data: data,
    };
  }

  buildQueryCount(filterConditions) {
    return `
      SELECT COUNT(*) AS count
      FROM ${ITEM_CONSTANTS.TABLE_NAME}
      ${filterConditions};
    `;
  }

  buildQueryData(filterConditions, limit, offset, sortBy = 'name', sortOrder = SORT_DIRECTION.ASC) {
    return `
      SELECT 
        id, 
        name
      FROM ${ITEM_CONSTANTS.TABLE_NAME}
      ${filterConditions}
      ORDER BY ${sortBy} ${sortOrder}
      LIMIT ${limit}
      OFFSET ${offset};
    `;
  }

  async getItemById(id) {
    if (!Number.isInteger(id) || id <= 0) {
      throw new Error(ITEM_CONSTANTS.INVALID_ID);
    }

    const query = `
      SELECT 
        *
      FROM ${ITEM_CONSTANTS.TABLE_NAME}
      WHERE id = ?
    `;

    const [rows] = await pool.query(query, [id]);

    return rows.length ? rows[0] : null;
  }

  async createItem(data) {
    const { name } = data;
    const insertQuery = `INSERT INTO ${ITEM_CONSTANTS.TABLE_NAME} (name) VALUES (?)`;
    const [result] = await pool.query(insertQuery, [name]);

    const id = result.insertId;

    return this.getItemById(id);
  }

  async updateItem(id, data) {
    const { name } = data;
    const updateQuery = `UPDATE ${ITEM_CONSTANTS.TABLE_NAME} SET name = ? WHERE id = ?`;
    await pool.query(updateQuery, [name, id]);

    return this.getItemById(id);
  }

  async deleteItem(id) {
    const item = await this.getItemById(id);
    if (!item) { return null; }

    await pool.query(`DELETE FROM ${ITEM_CONSTANTS.TABLE_NAME} WHERE id = ?`, [id]);

    return item;
  }

  async existsByName(name) {
    const query = `
      SELECT 1
      FROM ${ITEM_CONSTANTS.TABLE_NAME}
      WHERE LOWER(name) = LOWER(?)
      LIMIT 1
    `;
    const [rows] = await pool.query(query, [name]);

    return rows.length > 0;
  }
}

export default MysqlRepository;
