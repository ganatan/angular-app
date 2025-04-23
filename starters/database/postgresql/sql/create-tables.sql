-- continent
CREATE SEQUENCE continent_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;
ALTER SEQUENCE continent_id_seq OWNER TO postgres;

CREATE TABLE continent (
  id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('continent_id_seq' :: regclass),
  code dom_lib_short NOT NULL,
  name dom_lib NOT NULL,
  wikipedia_link dom_lib DEFAULT '',
  area dom_integer DEFAULT 0,
  population dom_bigint DEFAULT 0,
  countries_count dom_integer DEFAULT 0,
  creation_date dom_datetime DEFAULT now(),
  update_date dom_datetime DEFAULT NULL
);

-- country
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
  creation_date dom_datetime DEFAULT now(),
  update_date dom_datetime DEFAULT NULL
);

-- city
CREATE SEQUENCE city_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;
ALTER SEQUENCE city_id_seq OWNER TO postgres;

CREATE TABLE city (
  id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('city_id_seq' :: regclass),
  name dom_lib NOT NULL,
  wikipedia_link dom_lib NOT NULL,
  country_id dom_fk,
  capital dom_boolean DEFAULT false,
  creation_date dom_datetime DEFAULT now(),
  update_date dom_datetime DEFAULT NULL
);

-- person
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
  image dom_lib,
  creation_date dom_datetime DEFAULT now(),
  update_date dom_datetime DEFAULT NULL
);

-- profession
CREATE SEQUENCE profession_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;
ALTER SEQUENCE profession_id_seq OWNER TO postgres;

CREATE TABLE profession (
  id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('profession_id_seq' :: regclass),
  name dom_lib NOT NULL,
  creation_date dom_datetime DEFAULT now(),
  update_date dom_datetime DEFAULT NULL
);

-- person_profession
CREATE SEQUENCE person_profession_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;
ALTER SEQUENCE person_profession_id_seq OWNER TO postgres;

CREATE TABLE person_profession (
  id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('person_profession_id_seq' :: regclass),
  person_id dom_fk NOT NULL,
  profession_id dom_fk NOT NULL,
  creation_date dom_datetime DEFAULT now(),
  update_date dom_datetime DEFAULT NULL
);

-- media_type
CREATE SEQUENCE media_type_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;
ALTER SEQUENCE media_type_id_seq OWNER TO postgres;

CREATE TABLE media_type (
  id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('media_type_id_seq' :: regclass),
  name dom_lib NOT NULL,
  creation_date dom_datetime DEFAULT now(),
  update_date dom_datetime DEFAULT NULL
);

-- media
CREATE SEQUENCE media_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;
ALTER SEQUENCE media_id_seq OWNER TO postgres;

CREATE TABLE media (
  id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('media_id_seq' :: regclass),
  name dom_lib NOT NULL,
  release_date dom_date,
  media_type_id dom_fk,
  wikipedia_link dom_lib DEFAULT '',
  creation_date dom_datetime DEFAULT now(),
  update_date dom_datetime DEFAULT NULL
);

-- media_person
CREATE SEQUENCE media_person_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;
ALTER SEQUENCE media_person_id_seq OWNER TO postgres;

CREATE TABLE media_person (
  id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('media_person_id_seq' :: regclass),
  media_id dom_fk NOT NULL,
  person_id dom_fk NOT NULL,
  profession_id dom_fk NOT NULL,
  creation_date dom_datetime DEFAULT now(),
  update_date dom_datetime DEFAULT NULL
);

-- playlist
CREATE SEQUENCE playlist_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;
ALTER SEQUENCE playlist_id_seq OWNER TO postgres;

CREATE TABLE playlist (
  id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('playlist_id_seq' :: regclass),
  name dom_lib NOT NULL,
  description dom_comment DEFAULT '',
  creation_date dom_datetime DEFAULT now(),
  update_date dom_datetime DEFAULT NULL
);

-- playlist_element
CREATE SEQUENCE playlist_element_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;
ALTER SEQUENCE playlist_element_id_seq OWNER TO postgres;

CREATE TABLE playlist_element (
  id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('playlist_element_id_seq' :: regclass),
  playlist_id dom_fk NOT NULL,
  media_id dom_fk NOT NULL,
  position dom_integer DEFAULT 0,
  creation_date dom_datetime DEFAULT now(),
  update_date dom_datetime DEFAULT NULL
);
