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

/* -------------------- PERSONS --------------------------------------- */

SELECT 
t1.id as id,t1.name as name,
t1.birth_date as birthDate,
t1.wikipedia_link as wikipediaLink,
t2.name as city,
t3.name as country,
t4.name as continent,
t5.name as gender
FROM person t1
INNER JOIN city t2 ON t2.id=t1.birth_city_id
INNER JOIN country t3 ON t3.id=t2.country_id
INNER JOIN continent t4 ON t4.id=t3.continent_id
INNER JOIN gender t5 ON t5.id=t1.gender_id

/* -------------------- MOVIE_PERSON --------------------------------------- */

SELECT 
t2.name as name,
t2.release_date as releaseDate,
t3.name as person,
t4.name as profession
FROM movie_person t1
INNER JOIN movie t2 ON t2.id=t1.movie_id
INNER JOIN person t3 ON t3.id=t1.person_id
INNER JOIN profession t4 ON t4.id=t1.profession_id
ORDER BY t2.name ASC,t2.release_date ASC,t3.name ASC,t4.name ASC


SELECT 
t2.id as id,
t2.name as name,
t2.release_date as releaseDate,
t2.domestic as domestic,
t2.international as international,
t2.worldwide as worldwide,
t2.budget as budget,
t3.name as personName
FROM movie_person t1
INNER JOIN movie t2 ON t2.id=t1.movie_id
INNER JOIN person t3 ON t3.id=t1.person_id
WHERE t2.id=1000


/* -------------------- MOVIE_GENRE --------------------------------------- */

SELECT 
t2.name as name,
t2.release_date as releaseDate,
t3.name as genre
FROM movie_genre t1
INNER JOIN movie t2 ON t2.id=t1.movie_id
INNER JOIN genre t3 ON t3.id=t1.genre_id
ORDER BY t2.name ASC,t2.release_date ASC,t3.name ASC



