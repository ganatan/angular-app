INSERT INTO continent (code, name, wikipedia_link, area, population, countries_number) 
VALUES ('AF', 'Africa-pg', 'Africa', 30370000, 1287920000, 54);
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_number) 
VALUES ('AN', 'Antarctica-pg', 'Antarctica', 14000000, 4490, 0);
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_number) 
VALUES ('AS', 'Asia-pg', 'Asia', 44579000, 4545133000, 47);
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_number) 
VALUES ('OC', 'Australia-pg', 'Australia_(continent)', 8600000, 41261000, 14);
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_number) 
VALUES ('EU', 'Europe-pg', 'Europe', 10180000, 742648000, 45);
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_number) 
VALUES ('NA', 'North America-pg', 'North_America', 24709000, 587615000, 23);
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_number) 
VALUES ('SA', 'South America-pg', 'South_America', 17840000, 428240000, 12);



INSERT INTO country (name,wikipedia_link,iso_numeric,iso_alpha2,iso_alpha3,flag,continent_id) 
VALUES('United States','United_States','US','USA','660','us.png',
(select id from continent where code='NA'));
INSERT INTO country (name,wikipedia_link,iso_numeric,iso_alpha2,iso_alpha3,flag,continent_id) 
VALUES('Jersey','Jersey','JE','JEY','832','je.png',
(select id from continent where code='EU'));
INSERT INTO country (name,wikipedia_link,iso_numeric,iso_alpha2,iso_alpha3,flag,continent_id) 
VALUES('Sweden','Sweden','SE','SWE','752','se.png',
(select id from continent where code='EU'));


INSERT INTO city ( name,wikipedia_link,capital,country_id) 
VALUES('New York','New_York_City',false,
(select id from country where iso_numeric='US'));
INSERT INTO city ( name,wikipedia_link,capital,country_id) 
VALUES('Modesto','Modesto,_California',false,
(select id from country where iso_numeric='US'));
INSERT INTO city ( name,wikipedia_link,capital,country_id) 
VALUES('Syracus','Syracuse,_New_York',false,
(select id from country where iso_numeric='US'));
INSERT INTO city ( name,wikipedia_link,capital,country_id) 
VALUES('Saint Helier','Saint_Helier',false,
(select id from country where iso_numeric='JE'));
INSERT INTO city ( name,wikipedia_link,capital,country_id) 
VALUES('Stockholm','Stockholm',true,
(select id from country where iso_numeric='SE'));
INSERT INTO city ( name,wikipedia_link,capital,country_id) 
VALUES('Fresno, California','Fresno,_California',true,
(select id from country where iso_numeric='US'));
INSERT INTO city ( name,wikipedia_link,capital,country_id) 
VALUES('Detroit','Detroit',true,
(select id from country where iso_numeric='US'));

INSERT INTO person (name,wikipedia_link,birth_date,birth_city_id) 
VALUES('Robert Downey Jr.','Robert_Downey_Jr.','1965-04-04',
(select id from city where wikipedia_link='New_York_City'));

INSERT INTO person (name,wikipedia_link,birth_date,birth_city_id) 
VALUES('Jeremy Renner','Jeremy_Renner','1971-01-07',
(select id from city where wikipedia_link='Modesto,_California')
);
