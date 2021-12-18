/* -------------------- CONTINENTS --------------------------------------- */

SELECT 
  t1.code as code,
  t1.name as name,
  t1.wikipedia_link as "wikipediaLink",
  t1.fr_name as "frName",
  t1.fr_wikipedia_link as "frWikipediaLink",
  t1.area  as "area",
  t1.population as "population",
  t1.countries_number  as "countriesNumber"
FROM continent t1

SELECT 
  t1.id as "id",
  t1.name as "name",
  t1.wikipedia_link as "wikipediaLink",
  t2.id as "countryId",
  t2.name as "countryName",
  t2.wikipedia_link as "countryWikipediaLink"
FROM continent t1
INNER JOIN country t2 ON t2.continent_id=t1.id
WHERE t1.id=1000

/* -------------------- COUNTRIES --------------------------------------- */
SELECT 
  t1.id as "id",
  t1.name as "name",
  t1.wikipedia_link as "wikipediaLink",
  t1.fr_name as "frName",
  t1.fr_wikipedia_link as  "frWikipediaLink",
  t1.iso_numeric as "isoNumeric",
  t1.iso_alpha2 as "isoAlpha2",
  t1.iso_alpha3 as "isoAlpha3",
  t1.flag as flag,
  t2.id as "continentId",
  t2.name as "continentName",
  t2.wikipedia_link as "continentWikipediaLink"
FROM country t1
INNER JOIN continent t2 ON t2.id=t1.continent_id
WHERE t1.id = 1000
/* -------------------- CITIES --------------------------------------- */

SELECT 
  t1.id as id,
  t1.name as name,
  t1.wikipedia_link as wikipediaLink,
  t2.id as countryId,
  t2.name as countryName,
  t2.wikipedia_link as countryWikipediaLink,
  t3.id as continentId,
  t3.name as continentName,
  t3.wikipedia_link as continentWikipediaLink
FROM city t1
INNER JOIN country t2 ON t2.id=t1.country_id
INNER JOIN continent t3 ON t3.id=t2.continent_id

