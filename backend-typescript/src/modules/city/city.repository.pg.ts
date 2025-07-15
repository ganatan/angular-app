import pool from '../../core/database/clients/postgres/native.client';

import {
  addFilterCondition,
  adaptSortField,
} from '../../shared/utils/query/query-utils';

import {
  DEFAULT_ITEMS_PER_PAGE,
  DEFAULT_MIN_ENTITY_ID,
  MAX_ITEMS_PER_PAGE,
} from '../../shared/constants/pagination/pagination.constants';

import { SORT_DIRECTION, SortDirection } from '../../shared/constants/sort/sort.constants';

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
  totals?: any; // ignoré dans le calcul mais laissé comme dans ton code
}

interface Entity {
  id: number;
  name: string;
  countryName: string;
  countryIsoNumeric: string;
  continentName: string;
  continentCode: string;
}

const ITEMS_NAME = 'country';
const TABLE_NAME = 'country';

export default class PgRepository {
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

      const currentPage = Math.max(1, parseInt(String(page), 10));
      const requestedSize = parseInt(String(size), 10);
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

      console.log('00000000001:' + sqlData)
      console.log('00000000001:' + sqlCount)
      console.log('00000000001:' + JSON.stringify(filterParams))

      const [countResult, dataResult] = await Promise.all([
        pool.query(sqlCount, filterParams),
        pool.query(sqlData, filterParams),
      ]);

      return this.formatResultItems(dataResult.rows, {
        currentPage,
        perPage,
        totalItems: parseInt(countResult.rows[0].count, 10),
      });

    } catch (error) {
      console.error(`Error retrieving ${ITEMS_NAME}:`, error);
      return null;
    }
  }

  private formatResultItems(
    data: Entity[],
    { currentPage, perPage, totalItems }: PaginationInput
  ): any {
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
      data,
    };
  }

  private buildQueryCount(filterConditions: string): string {
    return `
      SELECT COUNT(t1.id) AS count
      FROM ${TABLE_NAME} t1
      ${filterConditions};
    `;
  }

  private buildQueryData(
    filterConditions: string,
    limit: number,
    offset: number,
    sortBy: string = 'name',
    sortOrder: SortDirection = SORT_DIRECTION.ASC
  ): string {
    return `
      SELECT 
        t1.id, 
        t1.name,
        t2.name AS "countryName",
        t2.iso_numeric AS "countryIsoNumeric",
        t3.name AS "continentName",
        t3.code AS "continentCode"
      FROM city t1
      INNER JOIN country t2 ON t1.country_id = t2.id
      INNER JOIN continent t3 ON t2.continent_id = t3.id
      ${filterConditions}
      ORDER BY ${sortBy} ${sortOrder}
      LIMIT ${limit}
      OFFSET ${offset};
    `;
  }
}

