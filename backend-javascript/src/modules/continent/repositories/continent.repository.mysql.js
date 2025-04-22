import pool from '../../../core/database/clients/mysql/native.client.js';

import {
  addFilterCondition,
  adaptSortField,
  addRangeCondition,
  addDensityCondition,
} from '../../../shared/utils/query/query-utils.js';

import { MAX_INTEGER } from '../../../shared/constants/pagination/limits.constants.js';
import {
  DEFAULT_ITEMS_PER_PAGE,
  DEFAULT_MIN_ENTITY_ID,
  MAX_ITEMS_PER_PAGE,
} from '../../../shared/constants/pagination/pagination.constants.js';

import { SORT_DIRECTION } from '../../../shared/constants/sort/sort.constants.js';
import { ITEM_CONSTANTS } from '../constants/continent.constant.js';

class MysqlRepository {
  async getItems(filters = {}) {
    const {
      page = 1,
      size = DEFAULT_ITEMS_PER_PAGE,
      sort = 'name',
      name = '',
      code = '',
      areaMin = null,
      areaMax = null,
      populationMin = null,
      populationMax = null,
      countriesCountMin = null,
      countriesCountMax = null,
      densityMin = null,
      densityMax = null,
    } = filters;

    const currentPage = Math.max(1, parseInt(page, 10));
    const requestedSize = parseInt(size, 10);
    const perPage = Math.min(Math.max(1, requestedSize), MAX_ITEMS_PER_PAGE);
    const offset = (currentPage - 1) * perPage;

    let filterConditions = `WHERE (1 = 1) AND (id >= ${DEFAULT_MIN_ENTITY_ID})`;
    const filterParams = [];

    filterConditions = addFilterCondition(filterConditions, filterParams, 'name', name);
    filterConditions = addFilterCondition(filterConditions, filterParams, 'code', code);
    filterConditions = addRangeCondition(filterConditions, filterParams, 'area', areaMin, areaMax, 0, MAX_INTEGER);
    filterConditions = addRangeCondition(filterConditions, filterParams, 'population', populationMin, populationMax);
    filterConditions = addRangeCondition(filterConditions, filterParams, 'countries_count', countriesCountMin, countriesCountMax);
    filterConditions = addDensityCondition(filterConditions, filterParams, densityMin, densityMax);

    const sortMapping = {
      countriesCount: 'countries_count',
    };
    let sortBy = adaptSortField(sort, sortMapping);
    const sortOrder = sort.startsWith('-') ? SORT_DIRECTION.DESC : SORT_DIRECTION.ASC;
    if (sort.startsWith('-')) {
      sortBy = sortBy.substring(1);
    }

    const sqlCount = this.buildQueryCount(filterConditions);
    const sqlData = this.buildQueryData(filterConditions, perPage, offset, sortBy, sortOrder);

    const [globalResult] = await pool.query(sqlCount, filterParams);
    const [dataResult] = await pool.query(sqlData, filterParams);

    const global = globalResult[0];
    global.density = global.area > 0
      ? parseFloat((parseFloat(global.population) / parseFloat(global.area)).toFixed(5))
      : 0;
    const currentPageTotals = this.buildCurrentPageTotals(dataResult);

    return this.formatResultItems(dataResult, {
      currentPage: currentPage,
      perPage: perPage,
      totalItems: parseInt(global.count, 10),
      totals: {
        global: global,
        currentPage: currentPageTotals,
      },
    });
  }

  buildCurrentPageTotals(rows) {
    let area = 0;
    let population = 0;
    let countriesCount = 0;
    let count = 0;

    for (const item of rows) {
      count += 1;
      area += parseFloat(item.area || 0);
      population += parseFloat(item.population || 0);
      countriesCount += parseInt(item.countriesCount || 0);
    }

    const density = area > 0
      ? parseFloat((population / area).toFixed(5))
      : 0;

    return {
      count,
      area,
      population,
      countriesCount,
      density,
    };
  }

  formatResultItems(data, { currentPage, perPage, totalItems, totals }) {
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
      totals: totals,
      data: data,
    };
  }

  buildQueryCount(conditions) {
    return `
      SELECT 
        COUNT(id) AS count,
        CAST(SUM(area) AS UNSIGNED) AS area,
        CAST(SUM(population) AS UNSIGNED) AS population,
        CAST(SUM(countries_count) AS UNSIGNED) AS countriesCount
      FROM ${ITEM_CONSTANTS.TABLE_NAME}
      ${conditions};
    `;
  }

  buildQueryData(conditions, limit, offset, sortBy = 'name', sortOrder = SORT_DIRECTION.ASC) {
    return `
      SELECT 
        id, 
        name,
        code,
        wikipedia_link AS wikipediaLink,
        area,
        population,
        countries_count AS countriesCount,
        CAST(ROUND(population / NULLIF(area, 0), 5) AS DECIMAL(10,5)) AS density
      FROM ${ITEM_CONSTANTS.TABLE_NAME}
      ${conditions}
      ORDER BY ${sortBy} ${sortOrder}
      LIMIT ${limit}
      OFFSET ${offset};
    `;
  }

  async getItemById(id) {
    const query = `
      SELECT 
        id, 
        name,
        code,
        wikipedia_link AS wikipediaLink,
        area,
        population,
        countries_count AS countriesCount,
        ROUND((population / NULLIF(area, 0)), 5) AS density
      FROM ${ITEM_CONSTANTS.TABLE_NAME}
      WHERE id = ?
    `;

    const [rows] = await pool.query(query, [id]);

    return rows.length ? rows[0] : null;
  }

  async createItem(data) {
    const query = `INSERT INTO ${ITEM_CONSTANTS.TABLE_NAME} (name) VALUES (?)`;
    const [result] = await pool.query(query, [data.name]);
    const id = result.insertId;

    return this.getItemById(id);
  }

  async updateItem(id, data) {
    const query = `UPDATE ${ITEM_CONSTANTS.TABLE_NAME} SET name = ? WHERE id = ?`;
    await pool.query(query, [data.name, id]);

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
      SELECT 1 FROM ${ITEM_CONSTANTS.TABLE_NAME}
      WHERE LOWER(name) = LOWER(?) LIMIT 1
    `;
    const [rows] = await pool.query(query, [name]);

    return rows.length > 0;
  }
}

export default MysqlRepository;
