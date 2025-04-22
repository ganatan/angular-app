


-- Steven Spielberg
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'NA', 'NA', 'NA', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'NA');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United States', 'United States', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'NA' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United States');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Cincinnati', 'Cincinnati', false, id FROM country WHERE name = 'United States' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Cincinnati' AND country_id = (SELECT id FROM country WHERE name = 'United States'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Steven Spielberg', 'Steven_Spielberg', '1946-12-18', id FROM city WHERE name = 'Cincinnati' AND country_id = (SELECT id FROM country WHERE name = 'United States');

-- Alfred Hitchcock
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'EU', 'EU', 'EU', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'EU');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United Kingdom', 'United Kingdom', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'EU' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United Kingdom');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'London', 'London', false, id FROM country WHERE name = 'United Kingdom' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'London' AND country_id = (SELECT id FROM country WHERE name = 'United Kingdom'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Alfred Hitchcock', 'Alfred_Hitchcock', '1899-08-13', id FROM city WHERE name = 'London' AND country_id = (SELECT id FROM country WHERE name = 'United Kingdom');

-- Martin Scorsese
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'NA', 'NA', 'NA', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'NA');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United States', 'United States', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'NA' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United States');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'New York', 'New York', false, id FROM country WHERE name = 'United States' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'New York' AND country_id = (SELECT id FROM country WHERE name = 'United States'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Martin Scorsese', 'Martin_Scorsese', '1942-11-17', id FROM city WHERE name = 'New York' AND country_id = (SELECT id FROM country WHERE name = 'United States');

-- Quentin Tarantino
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'NA', 'NA', 'NA', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'NA');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United States', 'United States', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'NA' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United States');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Knoxville', 'Knoxville', false, id FROM country WHERE name = 'United States' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Knoxville' AND country_id = (SELECT id FROM country WHERE name = 'United States'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Quentin Tarantino', 'Quentin_Tarantino', '1963-03-27', id FROM city WHERE name = 'Knoxville' AND country_id = (SELECT id FROM country WHERE name = 'United States');

-- Christopher Nolan
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'EU', 'EU', 'EU', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'EU');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United Kingdom', 'United Kingdom', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'EU' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United Kingdom');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'London', 'London', false, id FROM country WHERE name = 'United Kingdom' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'London' AND country_id = (SELECT id FROM country WHERE name = 'United Kingdom'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Christopher Nolan', 'Christopher_Nolan', '1970-07-30', id FROM city WHERE name = 'London' AND country_id = (SELECT id FROM country WHERE name = 'United Kingdom');

-- Ridley Scott
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'EU', 'EU', 'EU', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'EU');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United Kingdom', 'United Kingdom', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'EU' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United Kingdom');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'South Shields', 'South Shields', false, id FROM country WHERE name = 'United Kingdom' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'South Shields' AND country_id = (SELECT id FROM country WHERE name = 'United Kingdom'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Ridley Scott', 'Ridley_Scott', '1937-11-30', id FROM city WHERE name = 'South Shields' AND country_id = (SELECT id FROM country WHERE name = 'United Kingdom');

-- James Cameron
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'NA', 'NA', 'NA', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'NA');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'Canada', 'Canada', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'NA' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'Canada');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Kapuskasing', 'Kapuskasing', false, id FROM country WHERE name = 'Canada' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Kapuskasing' AND country_id = (SELECT id FROM country WHERE name = 'Canada'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'James Cameron', 'James_Cameron', '1954-08-16', id FROM city WHERE name = 'Kapuskasing' AND country_id = (SELECT id FROM country WHERE name = 'Canada');

-- Francis Ford Coppola
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'NA', 'NA', 'NA', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'NA');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United States', 'United States', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'NA' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United States');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Detroit', 'Detroit', false, id FROM country WHERE name = 'United States' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Detroit' AND country_id = (SELECT id FROM country WHERE name = 'United States'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Francis Ford Coppola', 'Francis_Ford_Coppola', '1939-04-07', id FROM city WHERE name = 'Detroit' AND country_id = (SELECT id FROM country WHERE name = 'United States');

-- Tim Burton
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'NA', 'NA', 'NA', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'NA');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United States', 'United States', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'NA' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United States');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Burbank', 'Burbank', false, id FROM country WHERE name = 'United States' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Burbank' AND country_id = (SELECT id FROM country WHERE name = 'United States'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Tim Burton', 'Tim_Burton', '1958-08-25', id FROM city WHERE name = 'Burbank' AND country_id = (SELECT id FROM country WHERE name = 'United States');

-- Clint Eastwood
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'NA', 'NA', 'NA', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'NA');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United States', 'United States', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'NA' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United States');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'San Francisco', 'San Francisco', false, id FROM country WHERE name = 'United States' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'San Francisco' AND country_id = (SELECT id FROM country WHERE name = 'United States'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Clint Eastwood', 'Clint_Eastwood', '1930-05-31', id FROM city WHERE name = 'San Francisco' AND country_id = (SELECT id FROM country WHERE name = 'United States');

-- Pedro Almodóvar
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'EU', 'EU', 'EU', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'EU');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'Spain', 'Spain', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'EU' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'Spain');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Calzada de Calatrava', 'Calzada de Calatrava', false, id FROM country WHERE name = 'Spain' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Calzada de Calatrava' AND country_id = (SELECT id FROM country WHERE name = 'Spain'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Pedro Almodóvar', 'Pedro_Almodóvar', '1949-09-25', id FROM city WHERE name = 'Calzada de Calatrava' AND country_id = (SELECT id FROM country WHERE name = 'Spain');

-- Jean-Luc Godard
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'EU', 'EU', 'EU', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'EU');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'France', 'France', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'EU' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'France');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Paris', 'Paris', false, id FROM country WHERE name = 'France' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Paris' AND country_id = (SELECT id FROM country WHERE name = 'France'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Jean-Luc Godard', 'Jean-Luc_Godard', '1930-12-03', id FROM city WHERE name = 'Paris' AND country_id = (SELECT id FROM country WHERE name = 'France');

-- Akira Kurosawa
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'AS', 'AS', 'AS', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'AS');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'Japan', 'Japan', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'AS' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'Japan');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Tokyo', 'Tokyo', false, id FROM country WHERE name = 'Japan' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Tokyo' AND country_id = (SELECT id FROM country WHERE name = 'Japan'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Akira Kurosawa', 'Akira_Kurosawa', '1910-03-23', id FROM city WHERE name = 'Tokyo' AND country_id = (SELECT id FROM country WHERE name = 'Japan');

-- Federico Fellini
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'EU', 'EU', 'EU', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'EU');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'Italy', 'Italy', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'EU' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'Italy');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Rimini', 'Rimini', false, id FROM country WHERE name = 'Italy' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Rimini' AND country_id = (SELECT id FROM country WHERE name = 'Italy'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Federico Fellini', 'Federico_Fellini', '1920-01-20', id FROM city WHERE name = 'Rimini' AND country_id = (SELECT id FROM country WHERE name = 'Italy');

-- Stanley Kubrick
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'NA', 'NA', 'NA', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'NA');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United States', 'United States', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'NA' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United States');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'New York', 'New York', false, id FROM country WHERE name = 'United States' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'New York' AND country_id = (SELECT id FROM country WHERE name = 'United States'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Stanley Kubrick', 'Stanley_Kubrick', '1928-07-26', id FROM city WHERE name = 'New York' AND country_id = (SELECT id FROM country WHERE name = 'United States');

-- Wes Anderson
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'NA', 'NA', 'NA', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'NA');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United States', 'United States', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'NA' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United States');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Houston', 'Houston', false, id FROM country WHERE name = 'United States' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Houston' AND country_id = (SELECT id FROM country WHERE name = 'United States'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Wes Anderson', 'Wes_Anderson', '1969-05-01', id FROM city WHERE name = 'Houston' AND country_id = (SELECT id FROM country WHERE name = 'United States');

-- Roman Polanski
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'EU', 'EU', 'EU', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'EU');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'France', 'France', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'EU' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'France');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Paris', 'Paris', false, id FROM country WHERE name = 'France' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Paris' AND country_id = (SELECT id FROM country WHERE name = 'France'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Roman Polanski', 'Roman_Polanski', '1933-08-18', id FROM city WHERE name = 'Paris' AND country_id = (SELECT id FROM country WHERE name = 'France');

-- David Fincher
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'NA', 'NA', 'NA', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'NA');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United States', 'United States', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'NA' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United States');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Denver', 'Denver', false, id FROM country WHERE name = 'United States' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Denver' AND country_id = (SELECT id FROM country WHERE name = 'United States'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'David Fincher', 'David_Fincher', '1962-08-28', id FROM city WHERE name = 'Denver' AND country_id = (SELECT id FROM country WHERE name = 'United States');

-- George Lucas
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'NA', 'NA', 'NA', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'NA');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United States', 'United States', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'NA' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United States');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Modesto', 'Modesto', false, id FROM country WHERE name = 'United States' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Modesto' AND country_id = (SELECT id FROM country WHERE name = 'United States'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'George Lucas', 'George_Lucas', '1944-05-14', id FROM city WHERE name = 'Modesto' AND country_id = (SELECT id FROM country WHERE name = 'United States');

-- Woody Allen
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'NA', 'NA', 'NA', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'NA');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United States', 'United States', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'NA' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United States');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'New York', 'New York', false, id FROM country WHERE name = 'United States' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'New York' AND country_id = (SELECT id FROM country WHERE name = 'United States'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Woody Allen', 'Woody_Allen', '1935-12-01', id FROM city WHERE name = 'New York' AND country_id = (SELECT id FROM country WHERE name = 'United States');

-- Orson Welles
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'NA', 'NA', 'NA', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'NA');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United States', 'United States', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'NA' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United States');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Kenosha', 'Kenosha', false, id FROM country WHERE name = 'United States' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Kenosha' AND country_id = (SELECT id FROM country WHERE name = 'United States'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Orson Welles', 'Orson_Welles', '1915-05-06', id FROM city WHERE name = 'Kenosha' AND country_id = (SELECT id FROM country WHERE name = 'United States');

-- François Truffaut
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'EU', 'EU', 'EU', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'EU');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'France', 'France', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'EU' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'France');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Paris', 'Paris', false, id FROM country WHERE name = 'France' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Paris' AND country_id = (SELECT id FROM country WHERE name = 'France'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'François Truffaut', 'François_Truffaut', '1932-02-06', id FROM city WHERE name = 'Paris' AND country_id = (SELECT id FROM country WHERE name = 'France');

-- Ingmar Bergman
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'EU', 'EU', 'EU', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'EU');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'Sweden', 'Sweden', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'EU' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'Sweden');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Uppsala', 'Uppsala', false, id FROM country WHERE name = 'Sweden' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Uppsala' AND country_id = (SELECT id FROM country WHERE name = 'Sweden'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Ingmar Bergman', 'Ingmar_Bergman', '1918-07-14', id FROM city WHERE name = 'Uppsala' AND country_id = (SELECT id FROM country WHERE name = 'Sweden');

-- Sergio Leone
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'EU', 'EU', 'EU', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'EU');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'Italy', 'Italy', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'EU' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'Italy');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Rome', 'Rome', false, id FROM country WHERE name = 'Italy' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Rome' AND country_id = (SELECT id FROM country WHERE name = 'Italy'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Sergio Leone', 'Sergio_Leone', '1929-01-03', id FROM city WHERE name = 'Rome' AND country_id = (SELECT id FROM country WHERE name = 'Italy');

-- David Lynch
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'NA', 'NA', 'NA', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'NA');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United States', 'United States', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'NA' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United States');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Missoula', 'Missoula', false, id FROM country WHERE name = 'United States' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Missoula' AND country_id = (SELECT id FROM country WHERE name = 'United States'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'David Lynch', 'David_Lynch', '1946-01-20', id FROM city WHERE name = 'Missoula' AND country_id = (SELECT id FROM country WHERE name = 'United States');

-- Paul Thomas Anderson
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'NA', 'NA', 'NA', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'NA');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United States', 'United States', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'NA' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United States');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Studio City', 'Studio City', false, id FROM country WHERE name = 'United States' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Studio City' AND country_id = (SELECT id FROM country WHERE name = 'United States'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Paul Thomas Anderson', 'Paul_Thomas_Anderson', '1970-06-26', id FROM city WHERE name = 'Studio City' AND country_id = (SELECT id FROM country WHERE name = 'United States');

-- Lars von Trier
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'EU', 'EU', 'EU', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'EU');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'Denmark', 'Denmark', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'EU' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'Denmark');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Copenhagen', 'Copenhagen', false, id FROM country WHERE name = 'Denmark' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Copenhagen' AND country_id = (SELECT id FROM country WHERE name = 'Denmark'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Lars von Trier', 'Lars_von_Trier', '1956-04-30', id FROM city WHERE name = 'Copenhagen' AND country_id = (SELECT id FROM country WHERE name = 'Denmark');

-- Spike Lee
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'NA', 'NA', 'NA', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'NA');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United States', 'United States', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'NA' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United States');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Atlanta', 'Atlanta', false, id FROM country WHERE name = 'United States' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Atlanta' AND country_id = (SELECT id FROM country WHERE name = 'United States'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Spike Lee', 'Spike_Lee', '1957-03-20', id FROM city WHERE name = 'Atlanta' AND country_id = (SELECT id FROM country WHERE name = 'United States');

-- Darren Aronofsky
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'NA', 'NA', 'NA', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'NA');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United States', 'United States', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'NA' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United States');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Brooklyn', 'Brooklyn', false, id FROM country WHERE name = 'United States' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Brooklyn' AND country_id = (SELECT id FROM country WHERE name = 'United States'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Darren Aronofsky', 'Darren_Aronofsky', '1969-02-12', id FROM city WHERE name = 'Brooklyn' AND country_id = (SELECT id FROM country WHERE name = 'United States');

-- Alejandro González Iñárritu
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'NA', 'NA', 'NA', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'NA');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'Mexico', 'Mexico', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'NA' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'Mexico');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Mexico City', 'Mexico City', false, id FROM country WHERE name = 'Mexico' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Mexico City' AND country_id = (SELECT id FROM country WHERE name = 'Mexico'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Alejandro González Iñárritu', 'Alejandro_González_Iñárritu', '1963-08-15', id FROM city WHERE name = 'Mexico City' AND country_id = (SELECT id FROM country WHERE name = 'Mexico');

-- Ang Lee
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'AS', 'AS', 'AS', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'AS');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'Taiwan', 'Taiwan', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'AS' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'Taiwan');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Pingtung', 'Pingtung', false, id FROM country WHERE name = 'Taiwan' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Pingtung' AND country_id = (SELECT id FROM country WHERE name = 'Taiwan'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Ang Lee', 'Ang_Lee', '1954-10-23', id FROM city WHERE name = 'Pingtung' AND country_id = (SELECT id FROM country WHERE name = 'Taiwan');

-- Denis Villeneuve
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'NA', 'NA', 'NA', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'NA');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'Canada', 'Canada', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'NA' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'Canada');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Gentilly', 'Gentilly', false, id FROM country WHERE name = 'Canada' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Gentilly' AND country_id = (SELECT id FROM country WHERE name = 'Canada'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Denis Villeneuve', 'Denis_Villeneuve', '1967-10-03', id FROM city WHERE name = 'Gentilly' AND country_id = (SELECT id FROM country WHERE name = 'Canada');

-- Bong Joon-ho
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'AS', 'AS', 'AS', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'AS');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'South Korea', 'South Korea', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'AS' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'South Korea');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Daegu', 'Daegu', false, id FROM country WHERE name = 'South Korea' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Daegu' AND country_id = (SELECT id FROM country WHERE name = 'South Korea'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Bong Joon-ho', 'Bong_Joon-ho', '1969-09-14', id FROM city WHERE name = 'Daegu' AND country_id = (SELECT id FROM country WHERE name = 'South Korea');

-- Hayao Miyazaki
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'AS', 'AS', 'AS', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'AS');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'Japan', 'Japan', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'AS' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'Japan');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Tokyo', 'Tokyo', false, id FROM country WHERE name = 'Japan' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Tokyo' AND country_id = (SELECT id FROM country WHERE name = 'Japan'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Hayao Miyazaki', 'Hayao_Miyazaki', '1941-01-05', id FROM city WHERE name = 'Tokyo' AND country_id = (SELECT id FROM country WHERE name = 'Japan');

-- Ken Loach
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'EU', 'EU', 'EU', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'EU');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United Kingdom', 'United Kingdom', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'EU' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United Kingdom');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Nuneaton', 'Nuneaton', false, id FROM country WHERE name = 'United Kingdom' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Nuneaton' AND country_id = (SELECT id FROM country WHERE name = 'United Kingdom'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Ken Loach', 'Ken_Loach', '1936-06-17', id FROM city WHERE name = 'Nuneaton' AND country_id = (SELECT id FROM country WHERE name = 'United Kingdom');

-- Luc Besson
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'EU', 'EU', 'EU', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'EU');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'France', 'France', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'EU' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'France');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Paris', 'Paris', false, id FROM country WHERE name = 'France' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Paris' AND country_id = (SELECT id FROM country WHERE name = 'France'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Luc Besson', 'Luc_Besson', '1959-03-18', id FROM city WHERE name = 'Paris' AND country_id = (SELECT id FROM country WHERE name = 'France');

-- John Woo
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'AS', 'AS', 'AS', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'AS');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'China', 'China', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'AS' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'China');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Guangzhou', 'Guangzhou', false, id FROM country WHERE name = 'China' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Guangzhou' AND country_id = (SELECT id FROM country WHERE name = 'China'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'John Woo', 'John_Woo', '1946-05-01', id FROM city WHERE name = 'Guangzhou' AND country_id = (SELECT id FROM country WHERE name = 'China');

-- Zhang Yimou
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'AS', 'AS', 'AS', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'AS');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'China', 'China', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'AS' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'China');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Xi''an', 'Xi''an', false, id FROM country WHERE name = 'China' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Xi''an' AND country_id = (SELECT id FROM country WHERE name = 'China'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Zhang Yimou', 'Zhang_Yimou', '1951-11-14', id FROM city WHERE name = 'Xi''an' AND country_id = (SELECT id FROM country WHERE name = 'China');

-- Michel Gondry
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'EU', 'EU', 'EU', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'EU');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'France', 'France', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'EU' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'France');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Versailles', 'Versailles', false, id FROM country WHERE name = 'France' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Versailles' AND country_id = (SELECT id FROM country WHERE name = 'France'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Michel Gondry', 'Michel_Gondry', '1963-05-08', id FROM city WHERE name = 'Versailles' AND country_id = (SELECT id FROM country WHERE name = 'France');

-- Sam Mendes
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'EU', 'EU', 'EU', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'EU');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United Kingdom', 'United Kingdom', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'EU' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United Kingdom');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Reading', 'Reading', false, id FROM country WHERE name = 'United Kingdom' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Reading' AND country_id = (SELECT id FROM country WHERE name = 'United Kingdom'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Sam Mendes', 'Sam_Mendes', '1965-08-01', id FROM city WHERE name = 'Reading' AND country_id = (SELECT id FROM country WHERE name = 'United Kingdom');

-- Guy Ritchie
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'EU', 'EU', 'EU', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'EU');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United Kingdom', 'United Kingdom', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'EU' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United Kingdom');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Hatfield', 'Hatfield', false, id FROM country WHERE name = 'United Kingdom' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Hatfield' AND country_id = (SELECT id FROM country WHERE name = 'United Kingdom'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Guy Ritchie', 'Guy_Ritchie', '1968-09-10', id FROM city WHERE name = 'Hatfield' AND country_id = (SELECT id FROM country WHERE name = 'United Kingdom');

-- Kathryn Bigelow
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'NA', 'NA', 'NA', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'NA');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United States', 'United States', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'NA' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United States');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'San Carlos', 'San Carlos', false, id FROM country WHERE name = 'United States' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'San Carlos' AND country_id = (SELECT id FROM country WHERE name = 'United States'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Kathryn Bigelow', 'Kathryn_Bigelow', '1951-11-27', id FROM city WHERE name = 'San Carlos' AND country_id = (SELECT id FROM country WHERE name = 'United States');

-- Sofia Coppola
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'NA', 'NA', 'NA', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'NA');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United States', 'United States', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'NA' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United States');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'New York', 'New York', false, id FROM country WHERE name = 'United States' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'New York' AND country_id = (SELECT id FROM country WHERE name = 'United States'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Sofia Coppola', 'Sofia_Coppola', '1971-05-14', id FROM city WHERE name = 'New York' AND country_id = (SELECT id FROM country WHERE name = 'United States');

-- Terrence Malick
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'NA', 'NA', 'NA', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'NA');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United States', 'United States', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'NA' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United States');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Ottawa', 'Ottawa', false, id FROM country WHERE name = 'United States' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Ottawa' AND country_id = (SELECT id FROM country WHERE name = 'United States'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Terrence Malick', 'Terrence_Malick', '1943-11-30', id FROM city WHERE name = 'Ottawa' AND country_id = (SELECT id FROM country WHERE name = 'United States');

-- Robert Zemeckis
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'NA', 'NA', 'NA', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'NA');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United States', 'United States', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'NA' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United States');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Chicago', 'Chicago', false, id FROM country WHERE name = 'United States' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Chicago' AND country_id = (SELECT id FROM country WHERE name = 'United States'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Robert Zemeckis', 'Robert_Zemeckis', '1952-05-14', id FROM city WHERE name = 'Chicago' AND country_id = (SELECT id FROM country WHERE name = 'United States');

-- Gus Van Sant
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'NA', 'NA', 'NA', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'NA');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United States', 'United States', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'NA' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United States');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Louisville', 'Louisville', false, id FROM country WHERE name = 'United States' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Louisville' AND country_id = (SELECT id FROM country WHERE name = 'United States'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Gus Van Sant', 'Gus_Van_Sant', '1952-07-24', id FROM city WHERE name = 'Louisville' AND country_id = (SELECT id FROM country WHERE name = 'United States');

-- Brian De Palma
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'NA', 'NA', 'NA', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'NA');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United States', 'United States', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'NA' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United States');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Newark', 'Newark', false, id FROM country WHERE name = 'United States' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Newark' AND country_id = (SELECT id FROM country WHERE name = 'United States'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Brian De Palma', 'Brian_De_Palma', '1940-09-11', id FROM city WHERE name = 'Newark' AND country_id = (SELECT id FROM country WHERE name = 'United States');

-- John Carpenter
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'NA', 'NA', 'NA', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'NA');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'United States', 'United States', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'NA' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'United States');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Carthage', 'Carthage', false, id FROM country WHERE name = 'United States' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Carthage' AND country_id = (SELECT id FROM country WHERE name = 'United States'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'John Carpenter', 'John_Carpenter', '1948-01-16', id FROM city WHERE name = 'Carthage' AND country_id = (SELECT id FROM country WHERE name = 'United States');

-- Frank Capra
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'EU', 'EU', 'EU', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'EU');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'Italy', 'Italy', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'EU' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'Italy');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Bisacquino', 'Bisacquino', false, id FROM country WHERE name = 'Italy' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Bisacquino' AND country_id = (SELECT id FROM country WHERE name = 'Italy'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Frank Capra', 'Frank_Capra', '1897-05-18', id FROM city WHERE name = 'Bisacquino' AND country_id = (SELECT id FROM country WHERE name = 'Italy');

-- Luis Buñuel
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'EU', 'EU', 'EU', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'EU');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'Spain', 'Spain', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'EU' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'Spain');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Calanda', 'Calanda', false, id FROM country WHERE name = 'Spain' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Calanda' AND country_id = (SELECT id FROM country WHERE name = 'Spain'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Luis Buñuel', 'Luis_Buñuel', '1900-02-22', id FROM city WHERE name = 'Calanda' AND country_id = (SELECT id FROM country WHERE name = 'Spain');

-- Éric Rohmer
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) SELECT 'EU', 'EU', 'EU', 0, 0, 0 WHERE NOT EXISTS (SELECT 1 FROM continent WHERE code = 'EU');
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, flag, continent_id) SELECT 'France', 'France', '000', 'XX', 'XXX', 'xx.png', id FROM continent WHERE code = 'EU' AND NOT EXISTS (SELECT 1 FROM country WHERE name = 'France');
INSERT INTO city (name, wikipedia_link, capital, country_id) SELECT 'Tulle', 'Tulle', false, id FROM country WHERE name = 'France' AND NOT EXISTS (SELECT 1 FROM city WHERE name = 'Tulle' AND country_id = (SELECT id FROM country WHERE name = 'France'));
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) SELECT 'Éric Rohmer', 'Éric_Rohmer', '1920-03-21', id FROM city WHERE name = 'Tulle' AND country_id = (SELECT id FROM country WHERE name = 'France');
