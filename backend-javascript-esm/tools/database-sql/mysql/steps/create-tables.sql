CREATE TABLE continent (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     code CHAR(10) NOT NULL,
     name CHAR(100) NOT NULL,
     wikipedia_link CHAR(100),
     area BIGINT,
     population BIGINT,
     countries_count INT,
     PRIMARY KEY (id)
);

ALTER TABLE
     continent AUTO_INCREMENT = 1000;




CREATE TABLE country (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     name CHAR(50) NOT NULL,
     wikipedia_link CHAR(50),
     continent_id INT,
     iso_numeric CHAR(50),
     iso_alpha2 CHAR(50),
     iso_alpha3 CHAR(50),
     PRIMARY KEY (id)
);

ALTER TABLE
     country AUTO_INCREMENT = 1000;




CREATE TABLE city (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     name CHAR(50) NOT NULL,
     wikipedia_link CHAR(50),
     country_id INTEGER,
     capital BOOLEAN,
     PRIMARY KEY (id)
);

ALTER TABLE
     city AUTO_INCREMENT = 1000;




CREATE TABLE person (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     name CHAR(100) NOT NULL,
     wikipedia_link CHAR(100) NOT NULL,
     birth_date DATE,
     birth_city_id INT,
     death_date DATE,
     death_city_id INT,
     image CHAR(50),
     PRIMARY KEY (id)
);

ALTER TABLE
     person AUTO_INCREMENT = 1000;




CREATE TABLE profession (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     name CHAR(50) NOT NULL,
     PRIMARY KEY (id)
);

ALTER TABLE
     profession AUTO_INCREMENT = 1000;
