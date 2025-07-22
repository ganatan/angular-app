CREATE TABLE continent (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     code CHAR(10) NOT NULL,
     name CHAR(100) NOT NULL,
     wikipedia_link CHAR(100) DEFAULT "",
     area INT DEFAULT 0,
     population BIGINT DEFAULT 0,
     countries_number INT DEFAULT 0,
     PRIMARY KEY (id)
);

ALTER TABLE
     continent AUTO_INCREMENT = 1000;

CREATE TABLE country (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     name CHAR(50) NOT NULL,
     wikipedia_link CHAR(50) DEFAULT "",
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
     wikipedia_link CHAR(50) DEFAULT "",
     country_id INTEGER,
     capital BOOLEAN DEFAULT false,
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
     gender_id INT,
     image CHAR(50),
     PRIMARY KEY (id)
);

ALTER TABLE
     person AUTO_INCREMENT = 1000;