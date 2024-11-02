SELECT
  id,
  code,
  name,
  wikipedia_link as "wikipedia_link",
  area :: int as "area",
  population :: float as "population",
  countries_number :: int as "countries_number",
  ROUND(
    (
      CAST(population AS NUMERIC) / NULLIF(CAST(area AS NUMERIC), 0)
    ),
    5
  ) as "density"
FROM
  continent
WHERE
  id = 1016
ORDER BY
  code ASC