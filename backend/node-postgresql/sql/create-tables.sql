CREATE SEQUENCE continent_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;
ALTER SEQUENCE continent_id_seq OWNER TO postgres;
CREATE TABLE continent
(
    id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('continent_id_seq'::regclass),
    code dom_lib_short NOT NULL,
    name dom_lib NOT NULL,
    wikipedia_link dom_lib,
    fr_name dom_lib,
    fr_wikipedia_link dom_lib,
    area dom_bigint,
    population dom_bigint,
    countries_number dom_integer
);


CREATE SEQUENCE country_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;
ALTER SEQUENCE country_id_seq OWNER TO postgres;
CREATE TABLE country
(
    id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('country_id_seq'::regclass),
    name dom_lib NOT NULL,
    wikipedia_link dom_lib,
    fr_name dom_lib,
    fr_wikipedia_link dom_lib,
    continent_id dom_fk,
    iso_numeric dom_lib NOT NULL,
    iso_alpha2 dom_lib NOT NULL,
    iso_alpha3 dom_lib NOT NULL,
    flag dom_lib
);


CREATE SEQUENCE city_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;
ALTER SEQUENCE city_id_seq OWNER TO postgres;
CREATE TABLE city
(
    id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('city_id_seq'::regclass),
    name dom_lib NOT NULL,
    wikipedia_link dom_lib NOT NULL,
    fr_name dom_lib,
    fr_wikipedia_link dom_lib,
    country_id dom_fk,
    capital dom_boolean
);

CREATE SEQUENCE images_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;
ALTER SEQUENCE images_id_seq OWNER TO postgres;
CREATE TABLE images
(
    id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('images_id_seq'::regclass),
    name dom_lib NOT NULL
);

CREATE SEQUENCE movie_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;
ALTER SEQUENCE movie_id_seq OWNER TO postgres;
CREATE TABLE movie
(
    id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('movie_id_seq'::regclass),
    name dom_lib_long NOT NULL,
    wikipedia_link dom_lib_long NOT NULL,
    fr_name dom_lib_long,
    fr_wikipedia_link dom_lib_long,
    release_date dom_date,
    domestic dom_bigint,
    international dom_bigint,
    worldwide dom_bigint,
    budget dom_bigint,
    running_time dom_time,
    franchise dom_boolean,
    tvshow dom_boolean,
    movie dom_boolean,
    clip dom_boolean,
    image dom_lib
);


CREATE SEQUENCE trailer_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;
ALTER SEQUENCE trailer_id_seq OWNER TO postgres;
CREATE TABLE trailer
(
    id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('trailer_id_seq'::regclass),
    name dom_lib_long NOT NULL,
    youtube_link dom_lib NOT NULL,
    create_date dom_date,
    release_date dom_date,
    movie dom_boolean,
    show dom_boolean,
    clip dom_boolean,
    game dom_boolean,
    documentary dom_boolean
);

