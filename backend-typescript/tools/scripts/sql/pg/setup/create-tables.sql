CREATE SEQUENCE continent_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;

ALTER SEQUENCE continent_id_seq OWNER TO postgres;

CREATE TABLE continent (
  id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('continent_id_seq' :: regclass),
  code dom_lib_short NOT NULL,
  name dom_lib NOT NULL,
  wikipedia_link dom_lib DEFAULT '',
  area dom_integer DEFAULT 0,
  population dom_bigint DEFAULT 0,
  countries_number dom_integer DEFAULT 0
);

CREATE SEQUENCE country_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;

ALTER SEQUENCE country_id_seq OWNER TO postgres;

CREATE TABLE country (
  id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('country_id_seq' :: regclass),
  name dom_lib NOT NULL,
  wikipedia_link dom_lib DEFAULT '',
  continent_id dom_fk,
  iso_numeric dom_lib NOT NULL,
  iso_alpha2 dom_lib NOT NULL,
  iso_alpha3 dom_lib NOT NULL,
  flag dom_lib
);

CREATE SEQUENCE city_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;

ALTER SEQUENCE city_id_seq OWNER TO postgres;

CREATE TABLE city (
  id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('city_id_seq' :: regclass),
  name dom_lib NOT NULL,
  wikipedia_link dom_lib NOT NULL,
  country_id dom_fk,
  capital dom_boolean DEFAULT false
);

CREATE SEQUENCE person_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;

ALTER SEQUENCE person_id_seq OWNER TO postgres;

CREATE TABLE person (
  id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('person_id_seq' :: regclass),
  name dom_lib NOT NULL,
  wikipedia_link dom_lib NOT NULL,
  birth_date dom_date,
  birth_city_id dom_fk,
  death_date dom_date,
  death_city_id dom_fk,
  gender_id dom_fk,
  image dom_lib
);