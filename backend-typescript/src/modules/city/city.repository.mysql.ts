import pool from '../../core/database/clients/mysql/native.client.js';

import {
  addFilterCondition,
  adaptSortField,
} from '../../shared/utils/query/query-utils.js';

import {
  DEFAULT_ITEMS_PER_PAGE,
  DEFAULT_MIN_ENTITY_ID,
  MAX_ITEMS_PER_PAGE,
} from '../../shared/constants/pagination/pagination.constants.js';

import { SORT_DIRECTION, SortDirection } from '../../shared/constants/sort/sort.constants.js';

interface Filters {
  page?: number;
  size?: number;
  sort?: string;
  name?: string;
  countryName?: string;
  countryIsoNumeric?: string;
  continentName?: string;
  continentCode?: string;
}

interface PaginationInput {
  currentPage: number;
  perPage: number;
  totalItems: number;
}

interface City {
  id: number;
  name: string;
  countryName: string;
  countryIsoNumeric: string;
  continentName: string;
  continentCode: string;
}

const ITEMS_NAME = 'city';
const TABLE_NAME = 'city';

export default class MysqlRepository {
  async getItems(filters: Filters = {}): Promise<any> {
    try {
      const {
        page = 1,
        size = DEFAULT_ITEMS_PER_PAGE,
        sort = 'name',
        name = '',
        countryName = '',
        countryIsoNumeric = '',
        continentName = '',
        continentCode = '',
      } = filters;

      const currentPage = Math.max(1, Number(page));
      const requestedSize = Number(size);
      const perPage = Math.min(Math.max(1, requestedSize), MAX_ITEMS_PER_PAGE);
      const offset = (currentPage - 1) * perPage;

      let filterConditions = `WHERE (1 = 1) AND (t1.id >= ${DEFAULT_MIN_ENTITY_ID})`;
      const filterParams: (string | number)[] = [];

      filterConditions = addFilterCondition(filterConditions, filterParams, 't1.name', name);
      filterConditions = addFilterCondition(filterConditions, filterParams, 't2.name', countryName);
      filterConditions = addFilterCondition(filterConditions, filterParams, 't2.iso_numeric', countryIsoNumeric);
      filterConditions = addFilterCondition(filterConditions, filterParams, 't3.name', continentName);
      filterConditions = addFilterCondition(filterConditions, filterParams, 't3.code', continentCode);

      const sortMapping: Record<string, string> = {
        countryName: 't2.name',
        countryIsoNumeric: 't2.iso_numeric',
        continentName: 't3.name',
        continentCode: 't3.code',
      };

      let sortBy = adaptSortField(sort, sortMapping);
      const sortOrder: SortDirection = sort.startsWith('-') ? SORT_DIRECTION.DESC : SORT_DIRECTION.ASC;
      if (sort.startsWith('-')) {
        sortBy = sortBy.substring(1);
      }

      const sqlCount = this.buildQueryCount(filterConditions);
      const sqlData = this.buildQueryData(filterConditions, perPage, offset, sortBy, sortOrder);

      const [countRows]: any[] = await pool.query(sqlCount, filterParams);
      const [dataRows]: any[] = await pool.query(sqlData, filterParams);

      return this.formatResultItems(dataRows as City[], {
        currentPage: currentPage,
        perPage: perPage,
        totalItems: parseInt(countRows[0].count, 10),
      });

    } catch (error) {
      console.error(`Error retrieving ${ITEMS_NAME}:`, error);

      return null;
    }
  }

  private formatResultItems(
    data: City[],
    { currentPage, perPage, totalItems }: PaginationInput,
  ): any {
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

  private buildQueryCount(conditions: string): string {
    return `
      SELECT COUNT(t1.id) AS count
      FROM ${TABLE_NAME} t1
      INNER JOIN country t2 ON t1.country_id = t2.id
      INNER JOIN continent t3 ON t2.continent_id = t3.id
      ${conditions};
    `;
  }

  private buildQueryData(
    conditions: string,
    limit: number,
    offset: number,
    sortBy: string = 'name',
    sortOrder: SortDirection = SORT_DIRECTION.ASC,
  ): string {
    return `
      SELECT 
        t1.id, 
        t1.name,
        t2.name AS countryName,
        t2.iso_numeric AS countryIsoNumeric,
        t3.name AS continentName,
        t3.code AS continentCode
      FROM ${TABLE_NAME} t1
      INNER JOIN country t2 ON t1.country_id = t2.id
      INNER JOIN continent t3 ON t2.continent_id = t3.id
      ${conditions}
      ORDER BY ${sortBy} ${sortOrder}
      LIMIT ${limit}
      OFFSET ${offset};
    `;
  }

  async getItemById(id: number): Promise<City | null> {
    const [rows]: any[] = await pool.query(
      `SELECT id, name FROM ${TABLE_NAME} WHERE id = ?`,
      [id],
    );

    return rows.length ? rows[0] as City : null;
  }

  async createItem(data: Partial<City>): Promise<City> {
    const { name } = data;
    const [result]: any[] = await pool.query(
      `INSERT INTO ${TABLE_NAME} (name) VALUES (?)`,
      [name],
    );

    return this.getItemById(result.insertId) as Promise<City>;
  }

  async updateItem(id: number, data: Partial<City>): Promise<City | null> {
    const { name } = data;
    await pool.query(`UPDATE ${TABLE_NAME} SET name = ? WHERE id = ?`, [name, id]);

    return this.getItemById(id);
  }

  async deleteItem(id: number): Promise<City | null> {
    const item = await this.getItemById(id);
    if (!item) { return null; }
    await pool.query(`DELETE FROM ${TABLE_NAME} WHERE id = ?`, [id]);

    return item;
  }

  async existsByName(name: string): Promise<boolean> {
    const [rows]: any[] = await pool.query(
      `SELECT 1 FROM ${TABLE_NAME} WHERE LOWER(name) = LOWER(?) LIMIT 1`,
      [name],
    );

    return rows.length > 0;
  }
}
