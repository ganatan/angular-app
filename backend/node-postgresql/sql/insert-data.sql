INSERT INTO continent (code,name,wikipedia_link,fr_name,fr_wikipedia_link,area,population,countries_number) 
VALUES('NA','North America','North_America','Amérique du Nord','Amérique_du_Nord',24709000,587615000,23);
INSERT INTO continent (code,name,wikipedia_link,fr_name,fr_wikipedia_link,area,population,countries_number) 
VALUES('EU','Europe','Europe','Europe','Europe',10180000,742648000,45);


INSERT INTO country (name,wikipedia_link,fr_name,fr_wikipedia_link,iso_numeric,iso_alpha2,iso_alpha3,flag,continent_id) 
VALUES('United States','United_States','États-Unis','États-Unis','US','USA','660','us.png',
(select id from continent where code='NA'));
INSERT INTO country (name,wikipedia_link,fr_name,fr_wikipedia_link,iso_numeric,iso_alpha2,iso_alpha3,flag,continent_id) 
VALUES('Jersey','Jersey','Jersey','Jersey','JE','JEY','832','je.png',
(select id from continent where code='EU'));
INSERT INTO country (name,wikipedia_link,fr_name,fr_wikipedia_link,iso_numeric,iso_alpha2,iso_alpha3,flag,continent_id) 
VALUES('Sweden','Sweden','Suède','Suède','SE','SWE','752','se.png',
(select id from continent where code='EU'));


INSERT INTO city ( name,wikipedia_link,fr_name,fr_wikipedia_link,capital,country_id) 
VALUES('New York','New_York_City','New York','New_York',false,
(select id from country where iso_numeric='US'));
INSERT INTO city ( name,wikipedia_link,fr_name,fr_wikipedia_link,capital,country_id) 
VALUES('Modesto','Modesto,_California','Modesto','Modesto_(Californie)',false,
(select id from country where iso_numeric='US'));
INSERT INTO city ( name,wikipedia_link,fr_name,fr_wikipedia_link,capital,country_id) 
VALUES('Syracus','Syracuse,_New_York','Syracuse','Syracuse_(New_York)',false,
(select id from country where iso_numeric='US'));
INSERT INTO city ( name,wikipedia_link,fr_name,fr_wikipedia_link,capital,country_id) 
VALUES('Saint Helier','Saint_Helier','Saint-Hélier','Saint-Hélier',false,
(select id from country where iso_numeric='JE'));
INSERT INTO city ( name,wikipedia_link,fr_name,fr_wikipedia_link,capital,country_id) 
VALUES('Stockholm','Stockholm','Stockholm','Stockholm',true,
(select id from country where iso_numeric='SE'));
INSERT INTO city ( name,wikipedia_link,fr_name,fr_wikipedia_link,capital,country_id) 
VALUES('Fresno, California','Fresno,_California','Fresno (Californie)','Fresno_(Californie)',true,
(select id from country where iso_numeric='US'));
INSERT INTO city ( name,wikipedia_link,fr_name,fr_wikipedia_link,capital,country_id) 
VALUES('Detroit','Detroit','Détroit (Michigan)','Détroit_(Michigan)',true,
(select id from country where iso_numeric='US'));


INSERT INTO movie(name,wikipedia_link,release_date,running_time,franchise,tvshow,movie,clip,
image,domestic,worldwide,international,budget) 
VALUES('Avengers: Endgame','Avengers:_Endgame','2019-04-26','03:01:00',true,false,true,false,
'Avengers_Endgame.jpg',858373000,1939427564,2797800564,356000000);
INSERT INTO movie(name,wikipedia_link,release_date,running_time,franchise,tvshow,movie,clip,
image,domestic,worldwide,international,budget) 
VALUES('Mission: Impossible – Fallout','Mission:_Impossible_–_Fallout','2018-07-27','02:27:00',true,false,true,false,
'Mission_Impossible_–_Fallout.jpg',220159104,572427555,792586659,178000000);
INSERT INTO movie(name,wikipedia_link,release_date,running_time,franchise,tvshow,movie,clip,
image,domestic,worldwide,international,budget) 
VALUES('Sherlock Holmes','Sherlock_Holmes_(2009_film)','2009-12-25','02:08:00',true,false,true,false,
'Sherlock_Holmes_(2009_film).jpg',209028679,315000000,524028679,90000000);
INSERT INTO movie(name,wikipedia_link,release_date,running_time,franchise,tvshow,movie,clip,
image,domestic,worldwide,international,budget) 
VALUES('Edge of Tomorrow','Edge_of_Tomorrow','2014-06-06','01:53:00',true,false,true,false,
'Edge_of_Tomorrow.jpg',100206256,270335000,370541256,178000000);

INSERT INTO trailer (name,youtube_link,create_date,release_date,movie,show,clip,game,documentary) 
VALUES('Avengers : Endgame - Bande-annonce officielle (VF)','wV-Q0o2OQjQ',
'1965-04-04','1965-04-04',true,false,false,false,false);

