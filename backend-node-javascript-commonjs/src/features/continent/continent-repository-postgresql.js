'use strict';

const {
  MAX_INTEGER,
  MIN_INTEGER,
  MAX_BIGINT,
  MIN_BIGINT } = require('../../shared/constants/data-limits-constants');

class PostgreSQLAdapter {
  constructor(dbClient) {
    this.dbClient = dbClient;
  }

  async getItems(req) {
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
      } = req.query;

      const validPage = page > 0 ? parseInt(page, 10) : 1;
      const validLimit = limit > 0 ? parseInt(limit, 10) : 10;
      const offset = (validPage - 1) * validLimit;

      let filterConditions = 'WHERE 1 = 1';
      const params = [];

      filterConditions = this.addFilterCondition(filterConditions, params, 'name', name, true);
      filterConditions = this.addFilterCondition(filterConditions, params, 'code', code, true);
      filterConditions = this.addRangeCondition(filterConditions, params, 'area', areaMin, areaMax, 0, MAX_INTEGER);
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

  addFilterCondition(condition, params, column, value, useLike = false) {
    if (value) {
      params.push(useLike ? `%${value}%` : value);

      return `${condition} AND ${column} ${useLike ? 'ILIKE' : '='} $${params.length}`;
    }

    return condition;
  }

  addRangeCondition(condition, params, column, minValue, maxValue, minLimit = 0, maxLimit = Infinity) {
    if (minValue !== null) {
      const parsedMin = parseInt(minValue, 10);
      if (!isNaN(parsedMin) && parsedMin >= minLimit && parsedMin <= maxLimit) {
        params.push(parsedMin);
        condition += ` AND ${column} >= $${params.length}`;
      }
    }

    if (maxValue !== null) {
      const parsedMax = parseInt(maxValue, 10);
      if (!isNaN(parsedMax) && parsedMax >= minLimit && parsedMax <= maxLimit) {
        params.push(parsedMax);
        condition += ` AND ${column} <= $${params.length}`;
      }
    }

    return condition;
  }

  addDensityCondition(condition, params, densityMin, densityMax) {
    if (densityMin !== null) {
      params.push(parseFloat(densityMin));
      condition += ` AND (population / NULLIF(area, 0)) >= $${params.length}`;
    }

    if (densityMax !== null) {
      params.push(parseFloat(densityMax));
      condition += ` AND (population / NULLIF(area, 0)) <= $${params.length}`;
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
          wikipedia_link as "wikipedia_link",
          area :: int as "area",
          population :: float as "population",
          countries_number :: int as "countries_number",
          ROUND((population / NULLIF(area, 0))::NUMERIC, 5) as "density"
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
          wikipedia_link as "wikipediaLink",
          area :: int as area,
          population :: float as "population",
          countries_number :: int as "countriesNumber",
          ROUND((population / NULLIF(area, 0))::NUMERIC, 5) as "density"
        FROM
          filtered_data
        LIMIT ${limit} OFFSET ${offset}
      ),
      totals AS (
        SELECT
          SUM(area) :: int AS total_area_all,
          SUM(population) :: float AS total_population_all,
          SUM(countries_number) :: int AS total_countries_number_all,
          COUNT(id) :: int AS count_all,
          ROUND((SUM(population) / NULLIF(SUM(area), 0))::NUMERIC, 5) AS average_density_all
        FROM
          filtered_data
      ),
      totals_pagination AS (
        SELECT
          SUM(area) :: int AS total_area,
          SUM(population) :: float AS total_population,
          SUM("countriesNumber") :: int AS total_countries_number,
          COUNT(id) :: int AS count,
          ROUND((SUM(population) / NULLIF(SUM(area), 0))::NUMERIC, 5) AS average_density
        FROM
          pagination
      )
      SELECT
        (
          SELECT
            count_all
          FROM
            totals
        ) :: int AS "count",
        (
          SELECT
            total_area_all
          FROM
            totals
        ) :: int AS "area",
        (
          SELECT
            total_population_all
          FROM
            totals
        ) :: float AS "population",
        (
          SELECT
            total_countries_number_all
          FROM
            totals
        ) :: int AS "countriesNumber",
        (
          SELECT
            count
          FROM
            totals_pagination
        ) :: int AS "countPagination",
        (
          SELECT
            total_area
          FROM
            totals_pagination
        ) :: int AS "areaPagination",
        (
          SELECT
            total_population
          FROM
            totals_pagination
        ) :: float AS "populationPagination",
        (
          SELECT
            total_countries_number
          FROM
            totals_pagination
        ) :: int AS "countriesNumberPagination",
        (
          SELECT
            average_density_all
          FROM
            totals
        ) AS "density",
        (
          SELECT
            average_density
          FROM
            totals_pagination
        ) AS "densityPagination",
        json_agg(pagination.*) AS continents
      FROM
        pagination;
          `;
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
          wikipedia_link as "wikipediaLink",
          area :: int as "area",
          population :: float as "population",
          countries_number :: int as "countriesNumber",
          ROUND(
            (
              CAST(population AS NUMERIC) / NULLIF(CAST(area AS NUMERIC), 0)
            ),
            5
          ) as "density"
        FROM
          continent
        WHERE id = $1`
        ;

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

  validateContinentData({ area, population, countriesNumber }) {
    if (area > MAX_INTEGER || area < MIN_INTEGER) {
      return false;
    }

    if (countriesNumber > MAX_INTEGER || countriesNumber < MIN_INTEGER) {
      return false;
    }

    if (population > MAX_BIGINT || population < MIN_BIGINT) {
      return false;
    }

    return true;
  }

  async createItem(continentData) {
    try {
      const area = parseInt(continentData.area, 10);
      const population = parseInt(continentData.population, 10);
      const countriesNumber = parseInt(continentData.countriesNumber, 10);

      if (!this.validateContinentData({ area, population, countriesNumber })) {
        return null;
      }

      const query = `
        INSERT INTO continent (code, name, wikipedia_link, area, population, countries_number) 
        VALUES ($1, $2, $3, $4, $5, $6)
      `;

      const values = [
        continentData.code,
        continentData.name,
        continentData.wikipediaLink,
        area,
        population,
        countriesNumber,
      ];

      return await this.dbClient.query(query, values);
    } catch (error) {
      console.error('Error creating continent:', error);

      return null;
    }
  }

  async updateItem(id, continentData) {
    try {
      const area = parseInt(continentData.area, 10);
      const population = parseInt(continentData.population, 10);
      const countriesNumber = parseInt(continentData.countriesNumber, 10);

      if (!this.validateContinentData({ area, population, countriesNumber })) {
        return null;
      }

      const query = `
        UPDATE continent 
        SET 
          code = $1, 
          name = $2, 
          wikipedia_link = $3, 
          area = $4, 
          population = $5, 
          countries_number = $6
        WHERE id = $7
      `;

      const values = [
        continentData.code,
        continentData.name,
        continentData.wikipediaLink,
        area,
        population,
        countriesNumber,
        parseInt(id, 10),
      ];

      return await this.dbClient.query(query, values);
    } catch (error) {
      console.error('Error updating continent:', error);

      return null;
    }
  }

  async deleteItem(id) {
    try {
      const query = 'DELETE FROM continent WHERE id = $1';

      return await this.dbClient.query(query, [parseInt(id, 10)]);
    } catch (error) {
      console.error('Error deleting continent:', error);

      return null;
    }
  }
}

module.exports = PostgreSQLAdapter;
