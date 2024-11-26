'use strict';

class MySQLAdapter {
  constructor(dbClient) {
    this.dbClient = dbClient;
  }

  async getItems(filters) {
    try {
      const {
        name = '',
        code = '',
        areaMin = null,
        areaMax = null,
        populationMin = null,
        populationMax = null,
        countriesNumberMin = null,
        countriesNumberMax = null,
        densityMin = null,
        densityMax = null,
        page = 1,
        limit = 10,
        sort = 'name',
      } = filters;

      const validPage = page > 0 ? parseInt(page, 10) : 1;
      const validLimit = limit > 0 ? parseInt(limit, 10) : 10;
      const offset = (validPage - 1) * validLimit;

      let filterConditions = 'WHERE 1 = 1';
      const params = [];

      filterConditions = this.addFilterCondition(filterConditions, params, 'name', name, true);
      filterConditions = this.addFilterCondition(filterConditions, params, 'code', code, true);
      filterConditions = this.addRangeCondition(filterConditions, params, 'area', areaMin, areaMax);
      filterConditions = this.addRangeCondition(filterConditions, params, 'population', populationMin, populationMax);
      filterConditions = this.addRangeCondition(filterConditions, params, 'countries_number', countriesNumberMin, countriesNumberMax);
      filterConditions = this.addDensityCondition(filterConditions, params, densityMin, densityMax);

      let sortOrder = 'ASC';
      let sortBy = sort;

      if (sort.startsWith('-')) {
        sortOrder = 'DESC';
        sortBy = sort.substring(1);
      }

      const query = this.buildQuery(filterConditions, validLimit, offset, sortBy, sortOrder);
      const result = await this.dbClient.query(query, params);

      return this.formatResult(result);

    } catch (error) {
      console.error('Error retrieving continents:', error);

      return null;
    }
  }

  parseValidNumber(value, defaultValue) {
    const parsedValue = parseInt(value, 10);

    return isNaN(parsedValue) || parsedValue <= 0 ? defaultValue : parsedValue;
  }

  addFilterCondition(condition, params, column, value, useLike = false) {
    if (value) {
      params.push(useLike ? `%${value}%` : value);

      return `${condition} AND ${column} ${useLike ? 'LIKE' : '='} ?`;
    }

    return condition;
  }

  addRangeCondition(condition, params, column, minValue, maxValue) {
    if (minValue !== null) {
      const parsedMin = parseInt(minValue, 10);
      if (!isNaN(parsedMin)) {
        params.push(parsedMin);
        condition += ` AND ${column} >= ?`;
      }
    }
    if (maxValue !== null) {
      const parsedMax = parseInt(maxValue, 10);
      if (!isNaN(parsedMax)) {
        params.push(parsedMax);
        condition += ` AND ${column} <= ?`;
      }
    }

    return condition;
  }

  addDensityCondition(condition, params, densityMin, densityMax) {
    if (densityMin !== null) {
      params.push(parseFloat(densityMin));
      condition += ' AND (population / NULLIF(area, 0)) >= ?';
    }

    if (densityMax !== null) {
      params.push(parseFloat(densityMax));
      condition += ' AND (population / NULLIF(area, 0)) <= ?';
    }

    return condition;
  }

  buildQuery(filterConditions, limit, offset, sortBy = 'name', sortOrder = 'ASC') {
    return `
      WITH filtered_data AS (
        SELECT
          id,
          code,
          name,
          wikipedia_link AS wikipedia_link,
          CAST(area AS SIGNED) AS area,
          CAST(population AS SIGNED) AS population,  -- Population sans décimales
          CAST(countries_number AS SIGNED) AS countries_number,
          ROUND(
            CAST(population AS DECIMAL(15, 2)) / NULLIF(CAST(area AS DECIMAL(15, 2)), 0),
            5
          ) AS density
        FROM
          continent
        ${filterConditions}
        ORDER BY
        ${sortBy} ${sortOrder}
      ),
      pagination AS (
        SELECT
          id,
          code,
          name,
          wikipedia_link AS wikipediaLink,
          CAST(area AS SIGNED) AS area,
          CAST(population AS SIGNED) AS population,  -- Population sans décimales
          CAST(countries_number AS SIGNED) AS countriesNumber,
          ROUND(
            CAST(population AS DECIMAL(15, 2)) / NULLIF(CAST(area AS DECIMAL(15, 2)), 0),
            5
          ) AS density
        FROM
          filtered_data
        LIMIT ${limit} OFFSET ${offset}
      ),
      totals AS (
        SELECT
          CAST(SUM(area) AS SIGNED) AS total_area_all,
          CAST(SUM(population) AS SIGNED) AS total_population_all,  -- Population sans décimales
          CAST(SUM(countries_number) AS SIGNED) AS total_countries_number_all,
          COUNT(id) AS count_all,
          ROUND(
            CAST(SUM(population) AS DECIMAL(15, 2)) / NULLIF(CAST(SUM(area) AS DECIMAL(15, 2)), 0),
            5
          ) AS average_density_all
        FROM
          filtered_data
      ),
      totals_pagination AS (
        SELECT
          CAST(SUM(area) AS SIGNED) AS total_area,
          CAST(SUM(population) AS SIGNED) AS total_population,  -- Population sans décimales
          CAST(SUM(countriesNumber) AS SIGNED) AS total_countries_number,
          COUNT(id) AS count,
          ROUND(
            CAST(SUM(population) AS DECIMAL(15, 2)) / NULLIF(CAST(SUM(area) AS DECIMAL(15, 2)), 0),
            5
          ) AS average_density
        FROM
          pagination
      )
      SELECT
        (
          SELECT
            count_all
          FROM
            totals
        ) AS count,
        (
          SELECT
            total_area_all
          FROM
            totals
        ) AS area,
        (
          SELECT
            total_population_all
          FROM
            totals
        ) AS population,  -- Population sans décimales
        (
          SELECT
            total_countries_number_all
          FROM
            totals
        ) AS countriesNumber,
        (
          SELECT
            count
          FROM
            totals_pagination
        ) AS countPagination,
        (
          SELECT
            total_area
          FROM
            totals_pagination
        ) AS areaPagination,
        (
          SELECT
            total_population
          FROM
            totals_pagination
        ) AS populationPagination,  -- Population sans décimales
        (
          SELECT
            total_countries_number
          FROM
            totals_pagination
        ) AS countriesNumberPagination,
        (
          SELECT
            average_density_all
          FROM
            totals
        ) AS density,
        (
          SELECT
            average_density
          FROM
            totals_pagination
        ) AS densityPagination,
        JSON_ARRAYAGG(
          JSON_OBJECT(
            'id',
            pagination.id,
            'code',
            pagination.code,
            'name',
            pagination.name,
            'wikipediaLink',
            pagination.wikipediaLink,
            'area',
            pagination.area,
            'population',
            pagination.population,  -- Population sans décimales
            'countriesNumber',
            pagination.countriesNumber,
            'density',
            pagination.density
          )
        ) AS continents
      FROM
        pagination;`;
  }

  formatResult(result) {
    const {
      count,
      area,
      population,
      countriesNumber,
      density,
      countPagination,
      areaPagination,
      populationPagination,
      countriesNumberPagination,
      densityPagination,
      continents,
    } = result[0];

    return {
      paginationTotals: {
        count: countPagination,
        area: areaPagination,
        population: populationPagination,
        countriesNumber: countriesNumberPagination,
        density: densityPagination,
      },
      allTotals: {
        count: count,
        area: area,
        population: population,
        countriesNumber: countriesNumber,
        density: density,
      },
      continents: continents,
    };
  }

  async getItem(id) {
    let idReceive = parseInt(id, 10);

    if (isNaN(idReceive) || idReceive < 0 || (typeof id === 'string' && id.length > 20)) {
      idReceive = 0;
    }
    try {
      const query = `
      SELECT
        id,
        code,
        name,
        wikipedia_link as wikipediaLink,
        area as area,
        population as population,
        countries_number as countriesNumber,
        ROUND((population / NULLIF(area, 0)), 2) as density
      FROM continent
      WHERE id = ?`;

      const result = await this.dbClient.query(query, [idReceive]);

      if (result && result.length > 0) {
        return result[0];
      }

      return null;
    } catch (error) {
      console.error('Error retrieving continent by id:', error);

      return null;
    }
  }

  async createItem(itemData) {
    try {
      const query = 'INSERT INTO continent (code, name) VALUES (?, ?)';
      const values = [itemData.code, itemData.name];

      return await this.dbClient.query(query, values);
    } catch (error) {
      console.error('Error creating continent:', error);

      return null;
    }
  }

  async updateItem(id, itemData) {
    try {
      const query = 'UPDATE continent SET code = ?, name = ? WHERE id = ?';
      const values = [itemData.code, itemData.name, parseInt(id, 10)];

      return await this.dbClient.query(query, values);
    } catch (error) {
      console.error('Error updating continent:', error);

      return null;
    }
  }

  async deleteItem(id) {
    try {
      const query = 'DELETE FROM continent WHERE id = ?';

      return await this.dbClient.query(query, [parseInt(id, 10)]);
    } catch (error) {
      console.error('Error deleting continent:', error);

      return null;
    }
  }
}

module.exports = MySQLAdapter;
