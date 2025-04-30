-- CONTINENTS
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) VALUES 
('AF', 'Africa', 'Africa', 30370000, 1287920000, 54),
('AN', 'Antarctica', 'Antarctica', 14000000, 4490, 0),
('AS', 'Asia', 'Asia', 44579000, 4545133000, 47),
('OC', 'Australia', 'Australia_(continent)', 8600000, 41261000, 14),
('EU', 'Europe', 'Europe', 10180000, 742648000, 45),
('NA', 'North America', 'North_America', 24709000, 587615000, 23),
('SA', 'South America', 'South_America', 17840000, 428240000, 12);

-- COUNTRIES
INSERT INTO country (name, wikipedia_link, iso_numeric, iso_alpha2, iso_alpha3, continent_id) VALUES 
('United States','United_States','660','US','USA',(SELECT id FROM continent WHERE code='NA')),
('Jersey','Jersey','832','JE','JEY',(SELECT id FROM continent WHERE code='EU')),
('Sweden','Sweden','752','SE','SWE',(SELECT id FROM continent WHERE code='EU'));

-- CITIES
INSERT INTO city (name, wikipedia_link, capital, country_id) VALUES
('New York','New_York_City', false, (SELECT id FROM country WHERE iso_numeric='660')),
('Modesto','Modesto,_California', false, (SELECT id FROM country WHERE iso_numeric='660')),
('Syracus','Syracuse,_New_York', false, (SELECT id FROM country WHERE iso_numeric='660')),
('Saint Helier','Saint_Helier', false, (SELECT id FROM country WHERE iso_numeric='832')),
('Stockholm','Stockholm', true, (SELECT id FROM country WHERE iso_numeric='752')),
('Fresno, California','Fresno,_California', true, (SELECT id FROM country WHERE iso_numeric='660')),
('Detroit','Detroit', true, (SELECT id FROM country WHERE iso_numeric='660')),
('Evanston', 'Evanston,_Illinois', false, (SELECT id FROM country WHERE iso_numeric='660')),
('Amsterdam', 'Amsterdam,_New_York', false, (SELECT id FROM country WHERE iso_numeric='660'));

-- PERSONS
INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) VALUES
('Robert Downey Jr.','Robert_Downey_Jr.','1965-04-04',(SELECT id FROM city WHERE wikipedia_link='New_York_City')),
('Jeremy Renner','Jeremy_Renner','1971-01-07',(SELECT id FROM city WHERE wikipedia_link='Modesto,_California'));

INSERT INTO person (name, wikipedia_link, birth_date, death_date, birth_city_id) VALUES
('Charlton Heston','Charlton_Heston','1923-10-04','2008-04-05',(SELECT id FROM city WHERE wikipedia_link='Evanston,_Illinois')),
('Kirk Douglas','Kirk_Douglas','1916-12-09','2020-02-05',(SELECT id FROM city WHERE wikipedia_link='Amsterdam,_New_York'));

-- PROFESSIONS
INSERT INTO profession (name) VALUES 
('Actor'),
('Actress'),
('Director'),
('Producer'),
('Executive Producer'),
('Associate Producer');




-- PERSON_PROFESSION
INSERT INTO person_profession (person_id, profession_id) VALUES
((SELECT id FROM person WHERE name = 'Robert Downey Jr.'), (SELECT id FROM profession WHERE name = 'Actor')),
((SELECT id FROM person WHERE name = 'Jeremy Renner'), (SELECT id FROM profession WHERE name = 'Actor')),
((SELECT id FROM person WHERE name = 'Kirk Douglas'), (SELECT id FROM profession WHERE name = 'Actor')),
((SELECT id FROM person WHERE name = 'Charlton Heston'), (SELECT id FROM profession WHERE name = 'Actor'));

-- MEDIA_TYPE
INSERT INTO media_type (name) VALUES 
('Movie'),
('Series'),
('Documentary');

-- MEDIA
INSERT INTO media (name, release_date, media_type_id, wikipedia_link) VALUES 
('Iron Man', '2008-05-02', (SELECT id FROM media_type WHERE name = 'Movie'), 'Iron_Man_(2008_film)'),
('Avengers: Endgame', '2019-04-26', (SELECT id FROM media_type WHERE name = 'Movie'), 'Avengers:_Endgame');

-- MEDIA_PERSON
INSERT INTO media_person (media_id, person_id, profession_id) VALUES
((SELECT id FROM media WHERE name = 'Iron Man'),
 (SELECT id FROM person WHERE name = 'Robert Downey Jr.'),
 (SELECT id FROM profession WHERE name = 'Actor')),

((SELECT id FROM media WHERE name = 'Avengers: Endgame'),
 (SELECT id FROM person WHERE name = 'Robert Downey Jr.'),
 (SELECT id FROM profession WHERE name = 'Actor')),

((SELECT id FROM media WHERE name = 'Avengers: Endgame'),
 (SELECT id FROM person WHERE name = 'Jeremy Renner'),
 (SELECT id FROM profession WHERE name = 'Actor'));

-- PLAYLIST
INSERT INTO playlist (name, description) VALUES 
('Marvel Heroes', 'A selection of iconic Marvel movies');

-- PLAYLIST_ELEMENT
INSERT INTO playlist_element (playlist_id, media_id, position) VALUES
((SELECT id FROM playlist WHERE name = 'Marvel Heroes'),
 (SELECT id FROM media WHERE name = 'Iron Man'), 1),

((SELECT id FROM playlist WHERE name = 'Marvel Heroes'),
 (SELECT id FROM media WHERE name = 'Avengers: Endgame'), 2);



-- INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) 
-- VALUES ('AF', 'Africa', 'Africa', 30370000, 1287920000, 54);
-- INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) 
-- VALUES ('AN', 'Antarctica', 'Antarctica', 14000000, 4490, 0);
-- INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) 
-- VALUES ('AS', 'Asia', 'Asia', 44579000, 4545133000, 47);
-- INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) 
-- VALUES ('OC', 'Australia', 'Australia_(continent)', 8600000, 41261000, 14);
-- INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) 
-- VALUES ('EU', 'Europe', 'Europe', 10180000, 742648000, 45);
-- INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) 
-- VALUES ('NA', 'North America', 'North_America', 24709000, 587615000, 23);
-- INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) 
-- VALUES ('SA', 'South America', 'South_America', 17840000, 428240000, 12);


-- INSERT INTO country (name,wikipedia_link,iso_numeric,iso_alpha2,iso_alpha3,continent_id) 
-- VALUES('United States','United_States','US','USA','660',
-- (select id from continent where code='NA'));
-- INSERT INTO country (name,wikipedia_link,iso_numeric,iso_alpha2,iso_alpha3,continent_id) 
-- VALUES('Jersey','Jersey','JE','JEY','832',
-- (select id from continent where code='EU'));
-- INSERT INTO country (name,wikipedia_link,iso_numeric,iso_alpha2,iso_alpha3,continent_id) 
-- VALUES('Sweden','Sweden','SE','SWE','752',
-- (select id from continent where code='EU'));


-- INSERT INTO city ( name,wikipedia_link,capital,country_id) 
-- VALUES('New York','New_York_City',false,
-- (select id from country where iso_numeric='US'));
-- INSERT INTO city ( name,wikipedia_link,capital,country_id) 
-- VALUES('Modesto','Modesto,_California',false,
-- (select id from country where iso_numeric='US'));
-- INSERT INTO city ( name,wikipedia_link,capital,country_id) 
-- VALUES('Syracus','Syracuse,_New_York',false,
-- (select id from country where iso_numeric='US'));
-- INSERT INTO city ( name,wikipedia_link,capital,country_id) 
-- VALUES('Saint Helier','Saint_Helier',false,
-- (select id from country where iso_numeric='JE'));
-- INSERT INTO city ( name,wikipedia_link,capital,country_id) 
-- VALUES('Stockholm','Stockholm',true,
-- (select id from country where iso_numeric='SE'));
-- INSERT INTO city ( name,wikipedia_link,capital,country_id) 
-- VALUES('Fresno, California','Fresno,_California',true,
-- (select id from country where iso_numeric='US'));
-- INSERT INTO city ( name,wikipedia_link,capital,country_id) 
-- VALUES('Detroit','Detroit',true,
-- (select id from country where iso_numeric='US'));

-- INSERT INTO city (name, wikipedia_link, capital, country_id)
-- VALUES('Evanston', 'Evanston,_Illinois', false,
--   (SELECT id FROM country WHERE iso_numeric = 'US'));

-- INSERT INTO city (name, wikipedia_link, capital, country_id)
-- VALUES('Amsterdam', 'Amsterdam,_New_York', false,
--   (SELECT id FROM country WHERE iso_numeric = 'US'));


-- INSERT INTO person (name,wikipedia_link,birth_date,birth_city_id) 
-- VALUES('Robert Downey Jr.','Robert_Downey_Jr.','1965-04-04',
-- (select id from city where wikipedia_link='New_York_City'));

-- INSERT INTO person (name,wikipedia_link,birth_date,birth_city_id) 
-- VALUES('Jeremy Renner','Jeremy_Renner','1971-01-07',
-- (select id from city where wikipedia_link='Modesto,_California')
-- );

-- INSERT INTO person (name, wikipedia_link, birth_date, death_date, birth_city_id)
-- VALUES('Charlton Heston', 'Charlton_Heston', '1923-10-04', '2008-04-05',
--   (SELECT id FROM city WHERE wikipedia_link = 'Evanston,_Illinois'));

-- INSERT INTO person (name, wikipedia_link, birth_date, death_date, birth_city_id)
-- VALUES('Kirk Douglas', 'Kirk_Douglas', '1916-12-09', '2020-02-05',
--   (SELECT id FROM city WHERE wikipedia_link = 'Amsterdam,_New_York'));


-- INSERT INTO profession (name) VALUES ('Actor');
-- INSERT INTO profession (name) VALUES ('Actress');
-- INSERT INTO profession (name) VALUES ('Director');
-- INSERT INTO profession (name) VALUES ('Producer');
-- INSERT INTO profession (name) VALUES ('Executive Producer');
-- INSERT INTO profession (name) VALUES ('Associate Producer');
-- INSERT INTO profession (name) VALUES ('Screenwriter');
-- INSERT INTO profession (name) VALUES ('Writer');
-- INSERT INTO profession (name) VALUES ('Co-Writer');
-- INSERT INTO profession (name) VALUES ('Script Supervisor');
-- INSERT INTO profession (name) VALUES ('Composer');
-- INSERT INTO profession (name) VALUES ('Conductor');
-- INSERT INTO profession (name) VALUES ('Music Supervisor');
-- INSERT INTO profession (name) VALUES ('Sound Designer');
-- INSERT INTO profession (name) VALUES ('Sound Editor');
-- INSERT INTO profession (name) VALUES ('Cinematographer');
-- INSERT INTO profession (name) VALUES ('Director of Photography');
-- INSERT INTO profession (name) VALUES ('Camera Operator');
-- INSERT INTO profession (name) VALUES ('Film Editor');
-- INSERT INTO profession (name) VALUES ('Colorist');
-- INSERT INTO profession (name) VALUES ('Casting Director');
-- INSERT INTO profession (name) VALUES ('Makeup Artist');
-- INSERT INTO profession (name) VALUES ('Costume Designer');
-- INSERT INTO profession (name) VALUES ('Art Director');
-- INSERT INTO profession (name) VALUES ('Production Designer');
-- INSERT INTO profession (name) VALUES ('Set Decorator');
-- INSERT INTO profession (name) VALUES ('Gaffer');
-- INSERT INTO profession (name) VALUES ('Key Grip');
-- INSERT INTO profession (name) VALUES ('Grip');
-- INSERT INTO profession (name) VALUES ('Stunt Coordinator');
-- INSERT INTO profession (name) VALUES ('Stunt Performer');
-- INSERT INTO profession (name) VALUES ('Visual Effects Supervisor');
-- INSERT INTO profession (name) VALUES ('Special Effects Technician');
-- INSERT INTO profession (name) VALUES ('Lighting Technician');
-- INSERT INTO profession (name) VALUES ('Unit Production Manager');
-- INSERT INTO profession (name) VALUES ('Line Producer');
-- INSERT INTO profession (name) VALUES ('Production Assistant');
-- INSERT INTO profession (name) VALUES ('Boom Operator');
-- INSERT INTO profession (name) VALUES ('Foley Artist');
-- INSERT INTO profession (name) VALUES ('Animator');
-- INSERT INTO profession (name) VALUES ('Voice Actor');
-- INSERT INTO profession (name) VALUES ('Location Manager');
-- INSERT INTO profession (name) VALUES ('Storyboard Artist');
-- INSERT INTO profession (name) VALUES ('Editor');
-- INSERT INTO profession (name) VALUES ('Dialogue Coach');
-- INSERT INTO profession (name) VALUES ('Dialect Coach');
