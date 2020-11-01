INSERT INTO users (name,password) VALUES('john doe','john doe');
INSERT INTO users (name,password) VALUES('admin','admin');
INSERT INTO users (name,password) VALUES('guest','guest');
INSERT INTO users (name,password) VALUES('user','user');


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


INSERT INTO gender (name) VALUES('man');
INSERT INTO gender (name) VALUES('woman');


INSERT INTO profession (name) VALUES('actor');
INSERT INTO profession (name) VALUES('actress');
INSERT INTO profession (name) VALUES('director');

INSERT INTO genre (name,wikipedia_link) VALUES('fantasy','Fantasy');
INSERT INTO genre (name,wikipedia_link) VALUES('adventure','Adventure');
INSERT INTO genre (name,wikipedia_link) VALUES('action','Action_fiction');
INSERT INTO genre (name,wikipedia_link) VALUES('science fiction','Science_fiction');


INSERT INTO person (name,wikipedia_link,birth_date,birth_city_id,gender_id) 
VALUES('Robert Downey Jr.','Robert_Downey_Jr.','1965-04-04',
(select id from city where wikipedia_link='New_York_City'),
(select id from gender where name='man'));
INSERT INTO person (name,wikipedia_link,birth_date,birth_city_id,gender_id) 
VALUES('Jeremy Renner','Jeremy_Renner','1971-01-07',
(select id from city where wikipedia_link='Modesto,_California'),
(select id from gender where name='man'));
INSERT INTO person (name,wikipedia_link,birth_date,birth_city_id,gender_id) 
VALUES('Tom Cruise','Tom_Cruise','1962-07-03',
(select id from city where wikipedia_link='Syracuse,_New_York'),
(select id from gender where name='man'));
INSERT INTO person (name,wikipedia_link,birth_date,birth_city_id,gender_id) 
VALUES('Henri Cavill','Henry_Cavill','1983-05-05',
(select id from city where wikipedia_link='Saint_Helier'),
(select id from gender where name='man'));
INSERT INTO person (name,wikipedia_link,birth_date,birth_city_id,gender_id) 
VALUES('Rebecca Ferguson','Rebecca_Ferguson','1983-10-19',
(select id from city where wikipedia_link='Stockholm'),
(select id from gender where name='woman'));
INSERT INTO person (name,wikipedia_link,birth_date,birth_city_id,death_date,death_city_id,gender_id) 
VALUES('Richard Kiel','Richard_Kiel',
'1939-09-13',(select id from city where wikipedia_link='Detroit'),
'2014-09-10',(select id from city where wikipedia_link='Fresno,_California'),
(select id from gender where name='woman'));


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


INSERT INTO movie_person (movie_id,person_id,profession_id) VALUES(
(select id from movie where wikipedia_link='Avengers:_Endgame'),
(select id from person where wikipedia_link='Robert_Downey_Jr.'),
(select id from profession where name='actor'));
INSERT INTO movie_person (movie_id,person_id,profession_id) VALUES(
(select id from movie where wikipedia_link='Avengers:_Endgame'),
(select id from person where wikipedia_link='Jeremy_Renner'),
(select id from profession where name='actor'));
INSERT INTO movie_person (movie_id,person_id,profession_id) VALUES(
(select id from movie where wikipedia_link='Mission:_Impossible_–_Fallout'),
(select id from person where wikipedia_link='Henry_Cavill'),
(select id from profession where name='actor'));
INSERT INTO movie_person (movie_id,person_id,profession_id) VALUES(
(select id from movie where wikipedia_link='Mission:_Impossible_–_Fallout'),
(select id from person where wikipedia_link='Tom_Cruise'),
(select id from profession where name='actor'));
INSERT INTO movie_person (movie_id,person_id,profession_id) VALUES(
(select id from movie where wikipedia_link='Mission:_Impossible_–_Fallout'),
(select id from person where wikipedia_link='Rebecca_Ferguson'),
(select id from profession where name='actress'));
INSERT INTO movie_person (movie_id,person_id,profession_id) VALUES(
(select id from movie where wikipedia_link='Sherlock_Holmes_(2009_film)'),
(select id from person where wikipedia_link='Robert_Downey_Jr.'),
(select id from profession where name='actor'));
INSERT INTO movie_person (movie_id,person_id,profession_id) VALUES(
(select id from movie where wikipedia_link='Edge_of_Tomorrow'),
(select id from person where wikipedia_link='Tom_Cruise'),
(select id from profession where name='actor'));


INSERT INTO trailer (name,youtube_link,movie_id) 
VALUES('Avengers : Endgame - Bande-annonce officielle (VF)','wV-Q0o2OQjQ',
(select id from movie where wikipedia_link='Avengers:_Endgame'));


INSERT INTO movie_genre (movie_id,genre_id) VALUES(
(select id from movie where wikipedia_link='Edge_of_Tomorrow'),
(select id from genre where wikipedia_link='Action_fiction'));
INSERT INTO movie_genre (movie_id,genre_id) VALUES(
(select id from movie where wikipedia_link='Edge_of_Tomorrow'),
(select id from genre where wikipedia_link='Adventure'));
INSERT INTO movie_genre (movie_id,genre_id) VALUES(
(select id from movie where wikipedia_link='Edge_of_Tomorrow'),
(select id from genre where wikipedia_link='Science_fiction'));
