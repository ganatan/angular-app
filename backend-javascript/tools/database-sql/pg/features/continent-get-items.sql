WITH filtered_data AS (
  SELECT
    id,
    code,
    name,
    wikipedia_link as "wikipedia_link",
    area :: int as "area",
    population :: float as "population",
    countries_number :: int as "countries_number",
    ROUND((population / NULLIF(area, 0)) :: NUMERIC, 5) as "density"
  FROM
    continent
  WHERE
    1 = 1
    AND name ILIKE '%a%'
  ORDER BY
    name ASC
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
    ROUND((population / NULLIF(area, 0)) :: NUMERIC, 5) as "density"
  FROM
    filtered_data
  LIMIT
    5 OFFSET 0
),
totals AS (
  SELECT
    SUM(area) :: int AS total_area_all,
    SUM(population) :: float AS total_population_all,
    SUM(countries_number) :: int AS total_countries_number_all,
    COUNT(id) :: int AS count_all,
    ROUND(
      (SUM(population) / NULLIF(SUM(area), 0)) :: NUMERIC,
      5
    ) AS average_density_all
  FROM
    filtered_data
),
totals_pagination AS (
  SELECT
    SUM(area) :: int AS total_area,
    SUM(population) :: float AS total_population,
    SUM("countriesNumber") :: int AS total_countries_number,
    COUNT(id) :: int AS count,
    ROUND(
      (SUM(population) / NULLIF(SUM(area), 0)) :: NUMERIC,
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