import pool from '../../../core/database/clients/postgres/native.client.js';

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

import { ITEM_CONSTANTS } from '../constants/media.constant.js';

class PgRepository {

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

      const sortMapping = {
      };
      let sortBy = adaptSortField(sort, sortMapping);
      const sortOrder = sort.startsWith('-') ? SORT_DIRECTION.DESC : SORT_DIRECTION.ASC;
      if (sort.startsWith('-')) {
        sortBy = sortBy.substring(1);
      }

      const sqlCount = this.buildQueryCount(filterConditions);
      const sqlData = this.buildQueryData(filterConditions, perPage, offset, sortBy, sortOrder);
      const [countResult, dataResult] = await Promise.all([
        pool.query(sqlCount, filterParams),
        pool.query(sqlData, filterParams),
      ]);

      const global = countResult.rows[0];

      return this.formatResultItems(dataResult.rows, {
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
          currentPage: currentPage,
          perPage: perPage,
          totalItems: totalItems,
          totalPages: totalPages,
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
      WHERE id = $1
    `;

    try {
      const { rows } = await pool.query(query, [id]);
      if (!rows.length) {
        return null;
      }

      return rows[0];
    } catch (error) {
      throw new Error(`Failed to fetch item by ID ${id} - ${error.message}`);
    }
  }

  async createItem(data) {
    const { name } = data;
    const { rows } = await pool.query(`INSERT INTO ${ITEM_CONSTANTS.TABLE_NAME} (name) VALUES ($1) RETURNING *`, [name]);

    return rows[0];
  }

  async updateItem(id, data) {
    const { name } = data;
    const { rows } = await pool.query(`UPDATE ${ITEM_CONSTANTS.TABLE_NAME} SET name = $1 WHERE id = $2 RETURNING *`, [name, id]);

    return rows.length ? rows[0] : null;
  }

  async deleteItem(id) {
    const { rows } = await pool.query(`DELETE FROM ${ITEM_CONSTANTS.TABLE_NAME} WHERE id = $1 RETURNING *`, [id]);

    return rows.length ? rows[0] : null;
  }

  async existsByName(name) {
    const { rows } = await pool.query(
      `SELECT 1 FROM ${ITEM_CONSTANTS.TABLE_NAME}  WHERE LOWER(name) = LOWER($1) LIMIT 1`,
      [name],
    );

    return rows.length > 0;
  }

}

export default PgRepository;
