WITH filtered_data AS (
  SELECT
    id,
    code,
    name,
    wikipedia_link AS wikipedia_link,
    CAST(area AS SIGNED) AS area,
    CAST(population AS DECIMAL(15, 2)) AS population,
    CAST(countries_number AS SIGNED) AS countries_number,
    ROUND(
      CAST(population AS DECIMAL(15, 2)) / NULLIF(CAST(area AS DECIMAL(15, 2)), 0),
      5
    ) AS density
  FROM
    continent
  WHERE
    LOWER(name) LIKE '%a%' 
  ORDER BY
    name ASC
),
pagination AS (
  SELECT
    id,
    code,
    name,
    wikipedia_link AS wikipediaLink,
    CAST(area AS SIGNED) AS area,
    CAST(population AS DECIMAL(15, 2)) AS population,
    CAST(countries_number AS SIGNED) AS countriesNumber,
    ROUND(
      CAST(population AS DECIMAL(15, 2)) / NULLIF(CAST(area AS DECIMAL(15, 2)), 0),
      5
    ) AS density
  FROM
    filtered_data
  LIMIT
    5 OFFSET 0
),
totals AS (
  SELECT
    CAST(SUM(area) AS SIGNED) AS total_area_all,
    CAST(SUM(population) AS DECIMAL(15, 2)) AS total_population_all,
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
    CAST(SUM(population) AS DECIMAL(15, 2)) AS total_population,
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
  ) AS population,
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
  ) AS populationPagination,
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
      pagination.population,
      'countriesNumber',
      pagination.countriesNumber,
      'density',
      pagination.density
    )
  ) AS continents
FROM
  pagination;