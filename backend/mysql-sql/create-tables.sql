CREATE TABLE users (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     name CHAR(50) NOT NULL,
     password CHAR(50),
     PRIMARY KEY (id)
);

ALTER TABLE
     users AUTO_INCREMENT = 1000;

CREATE TABLE continent (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     code CHAR(10) NOT NULL,
     name CHAR(100) NOT NULL,
     wikipedia_link CHAR(100),
     fr_name CHAR(100),
     fr_wikipedia_link CHAR(100),
     area BIGINT,
     population BIGINT,
     countries_number INT,
     PRIMARY KEY (id)
);

ALTER TABLE
     continent AUTO_INCREMENT = 1000;

CREATE TABLE country (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     name CHAR(50) NOT NULL,
     wikipedia_link CHAR(50),
     fr_name CHAR(50),
     fr_wikipedia_link CHAR(50),
     continent_id INT,
     iso_numeric CHAR(50),
     iso_alpha2 CHAR(50),
     iso_alpha3 CHAR(50),
     flag CHAR(50),
     PRIMARY KEY (id)
);

ALTER TABLE
     country AUTO_INCREMENT = 1000;

CREATE TABLE city (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     name CHAR(50) NOT NULL,
     wikipedia_link CHAR(50),
     fr_name CHAR(50),
     fr_wikipedia_link CHAR(50),
     country_id INTEGER,
     capital BOOLEAN,
     PRIMARY KEY (id)
);

ALTER TABLE
     city AUTO_INCREMENT = 1000;

CREATE TABLE gender (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     name CHAR(50) NOT NULL,
     wikipedia_link CHAR(50),
     PRIMARY KEY (id)
);

ALTER TABLE
     gender AUTO_INCREMENT = 1000;

CREATE TABLE profession (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     name CHAR(50) NOT NULL,
     wikipedia_link CHAR(50),
     fr_name CHAR(50),
     fr_wikipedia_link CHAR(50),
     PRIMARY KEY (id)
);

ALTER TABLE
     profession AUTO_INCREMENT = 1000;

CREATE TABLE genre (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     name CHAR(50) NOT NULL,
     wikipedia_link CHAR(50),
     fr_name CHAR(50),
     fr_wikipedia_link CHAR(50),
     PRIMARY KEY (id)
);

ALTER TABLE
     genre AUTO_INCREMENT = 1000;

CREATE TABLE images (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     name CHAR(50) NOT NULL,
     PRIMARY KEY (id)
);

ALTER TABLE
     images AUTO_INCREMENT = 1000;

CREATE TABLE company (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     name CHAR(50) NOT NULL,
     PRIMARY KEY (id)
);

ALTER TABLE
     company AUTO_INCREMENT = 1000;

CREATE TABLE movie (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     name CHAR(100) NOT NULL,
     wikipedia_link CHAR(100) NOT NULL,
     fr_name CHAR(100),
     fr_wikipedia_link CHAR(100),
     release_date DATE,
     domestic BIGINT,
     international BIGINT,
     worldwide BIGINT,
     budget BIGINT,
     running_time TIME,
     franchise BOOLEAN,
     tvshow BOOLEAN,
     movie BOOLEAN,
     clip BOOLEAN,
     image CHAR(50),
     PRIMARY KEY (id)
);

ALTER TABLE
     movie AUTO_INCREMENT = 1000;

CREATE TABLE person (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     name CHAR(100) NOT NULL,
     wikipedia_link CHAR(100) NOT NULL,
     fr_name CHAR(100),
     fr_wikipedia_link CHAR(100),
     birth_date DATE,
     birth_city_id INT,
     death_date DATE,
     death_city_id INT,
     gender_id INT,
     image CHAR(50),
     PRIMARY KEY (id)
);

ALTER TABLE
     person AUTO_INCREMENT = 1000;

CREATE TABLE trailer (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     name CHAR(100) NOT NULL,
     movie_id INT,
     youtube_link CHAR(50) NOT NULL,
     PRIMARY KEY (id)
);

ALTER TABLE
     trailer AUTO_INCREMENT = 1000;

CREATE TABLE views (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     code CHAR(20) NOT NULL,
     movie_id INT,
     create_date DATE,
     comment CHAR(200),
     PRIMARY KEY (id)
);

ALTER TABLE
     views AUTO_INCREMENT = 1000;

CREATE TABLE movie_person (
     movie_id INT,
     person_id INT,
     profession_id INT
);

CREATE TABLE movie_genre (movie_id INT, genre_id INT);

CREATE TABLE movie_image (movie_id INT, image_id INT);