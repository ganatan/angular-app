import pool from '../../../core/database/clients/postgres/native.client.js';

import {
  addFilterCondition,
  adaptSortField,
} from '../../../shared/utils/query/query-utils.js';

import {
  DEFAULT_ITEMS_PER_PAGE,
  DEFAULT_MIN_ENTITY_ID,
  MAX_ITEMS_PER_PAGE,
} from '../../../shared/constants/pagination/pagination.constants.js';
import { SORT_DIRECTION } from '../../../shared/constants/sort/sort.constants.js';

const ITEMS_NAME = 'country';
const TABLE_NAME = 'country';

class PgRepository {

  async getItems(filters) {
    try {
      const {
        page = 1,
        size = DEFAULT_ITEMS_PER_PAGE,
        sort = 'name',
        name = '',
        isoNumeric = '',
        isoAlpha2 = '',
        isoAlpha3 = '',
        continentName = '',
        continentCode = '',
      } = filters;

      const currentPage = Math.max(1, parseInt(page, 10));
      const requestedSize = parseInt(size, 10);
      const perPage = Math.min(Math.max(1, requestedSize), MAX_ITEMS_PER_PAGE);
      const offset = (currentPage - 1) * perPage;

      let filterConditions = `WHERE (1 = 1) AND (t1.id >= ${DEFAULT_MIN_ENTITY_ID})`;
      const filterParams = [];

      filterConditions = addFilterCondition(filterConditions, filterParams, 't1.name', name);
      filterConditions = addFilterCondition(filterConditions, filterParams, 't1.iso_numeric', isoNumeric);
      filterConditions = addFilterCondition(filterConditions, filterParams, 't1.iso_alpha2', isoAlpha2);
      filterConditions = addFilterCondition(filterConditions, filterParams, 't1.iso_alpha3', isoAlpha3);
      filterConditions = addFilterCondition(filterConditions, filterParams, 't2.name', continentName);
      filterConditions = addFilterCondition(filterConditions, filterParams, 't2.code', continentCode);

      const sortMapping = {
        isoNumeric: 't1.iso_numeric',
        isoAlpha2: 't1.iso_alpha2',
        isoAlpha3: 't1.iso_alpha3',
        continentName: 't2.name',
        continentCode: 't2.code',
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

      return this.formatResultItems(dataResult.rows, {
        currentPage: currentPage,
        perPage: perPage,
        totalItems: parseInt(countResult.rows[0].count, 10),
      });
    } catch (error) {
      console.error(`Error retrieving ${ITEMS_NAME}:`, error);

      return null;
    }
  }

  formatResultItems(data, { currentPage, perPage, totalItems, totals }) {
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
      SELECT COUNT(t1.id) AS count
      FROM ${TABLE_NAME} t1
      ${filterConditions};
    `;
  }

  buildQueryData(filterConditions, limit, offset, sortBy = 'name', sortOrder = SORT_DIRECTION.ASC) {
    return `
      SELECT 
        t1.id, 
        t1.name,
        t1.iso_numeric AS "isoNumeric",
        t1.iso_alpha2 AS "isoAlpha2",
        t1.iso_alpha3 AS "isoAlpha3",
		    t2.name AS "continentName",
		    t2.code AS "continentCode"
      FROM country t1
	    INNER JOIN continent t2 ON  t1.continent_id = t2.id
      ${filterConditions}
      ORDER BY ${sortBy} ${sortOrder}
      LIMIT ${limit}
      OFFSET ${offset};
    `;
  }

  async getItemById(id) {
    const { rows } = await pool.query(`SELECT * FROM ${TABLE_NAME} WHERE id = $1`, [id]);
    if (!rows.length) { return null; }

    const row = rows[0];

    return {
      id: row.id,
      name: row.name,
    };
  }

  async createItem(data) {
    const { name } = data;
    const { rows } = await pool.query(`INSERT INTO ${TABLE_NAME} (name) VALUES ($1) RETURNING *`, [name]);

    return rows[0];
  }

  async updateItem(id, data) {
    const { name } = data;
    const { rows } = await pool.query(`UPDATE ${TABLE_NAME} SET name = $1 WHERE id = $2 RETURNING *`, [name, id]);

    return rows.length ? rows[0] : null;
  }

  async deleteItem(id) {
    const { rows } = await pool.query(`DELETE FROM ${TABLE_NAME} WHERE id = $1 RETURNING *`, [id]);

    return rows.length ? rows[0] : null;
  }

  async existsByName(name) {
    const { rows } = await pool.query(
      `SELECT 1 FROM ${TABLE_NAME}  WHERE LOWER(name) = LOWER($1) LIMIT 1`,
      [name],
    );

    return rows.length > 0;
  }

}

export default PgRepository;
