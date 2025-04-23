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


