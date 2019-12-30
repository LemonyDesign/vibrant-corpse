--CREATE DATABASE vibrantcorpse
-- ORIGIN TABLE (to amend use drop as below)

DROP TABLE IF EXISTS collective_writer;
DROP TABLE IF EXISTS writing;
DROP TABLE IF EXISTS favourite;
DROP TABLE IF EXISTS collective;
DROP TABLE IF EXISTS writer;

-- IMMUTABLE BASE TABLE FOR writer(s) (ONE-)
CREATE TABLE writer (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  hash VARCHAR(72)
);

-- IMMUTABLE BASE TABLE FOR group(s) (ONE-)
CREATE TABLE collective (
  id SERIAL PRIMARY KEY,
  collective_name VARCHAR(100) NOT NULL
);

CREATE TABLE favourite (
  id SERIAL PRIMARY KEY,
  favourite_corpse VARCHAR(100) UNIQUE NOT NULL,
  favourite_modifier_word VARCHAR(50) UNIQUE NOT NULL,
  favourite_modifier_desc VARCHAR(100) UNIQUE NOT NULL,
  favourite_base_word VARCHAR(50) UNIQUE NOT NULL,
  favourite_base_desc VARCHAR(100) UNIQUE NOT NULL,
  writer_id INT NOT NULL,
  collective_id INT,
  FOREIGN KEY (writer_id) REFERENCES writer (id),
  FOREIGN KEY (collective_id) REFERENCES collective (id)
);

CREATE TABLE writing (
  id SERIAL PRIMARY KEY,
  edit TEXT NOT NULL,
  original TEXT NOT NULL,
  favourite_id INT NOT NULL,
  writer_id INT NOT NULL,
  collective_id INT,
  time timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  FOREIGN KEY (favourite_id) REFERENCES favourite (id),
  FOREIGN KEY (writer_id) REFERENCES writer (id),
  FOREIGN KEY (collective_id) REFERENCES collective (id)
);

CREATE TABLE collective_writer (
  writer_id INT NOT NULL,
  collective_id INT NOT NULL,
  FOREIGN KEY (writer_id) REFERENCES writer (id),
  FOREIGN KEY (collective_id) REFERENCES collective (id)
);

-- **** INSERT VALUES *** --

INSERT INTO writer VALUES (1, 'Mark', 'mark@gmail.com', 'horse');
INSERT INTO writer VALUES (2, 'Debbie', 'debbie@gmail.com', 'pig');
INSERT INTO writer VALUES (3, 'Sarah', 'sarah@gmail.com', 'dog');
INSERT INTO writer VALUES (4, 'Jon', 'jon@gmail.com', 'cat');
INSERT INTO writer VALUES (5, 'William', 'william@gmail.com', 'ostrich');
ALTER SEQUENCE writer_id_seq RESTART WITH 6 INCREMENT BY 1;

INSERT INTO collective VALUES (1, 'Whitley Rollers');
INSERT INTO collective VALUES (2, 'Soused Poets');
ALTER SEQUENCE collective_id_seq RESTART WITH 3 INCREMENT BY 1;

INSERT INTO favourite VALUES (1, 'pickled heron', 'pickled', 'this is what the adjective pickled means', 'heron', 'this is what the noun heron means', 1, 1);
INSERT INTO favourite VALUES (2, 'wasted water', 'wasted', 'this is what the adjective wasted means', 'water', 'this is what the noun water means', 3, 1);
INSERT INTO favourite VALUES (3, 'toughly run', 'toughly', 'this is what the adverb toughly means', 'run', 'this is what the verb run means', 5);
INSERT INTO favourite VALUES (4, 'shoehorned wig', 'shoehorned', 'this is what the adjective shoehorned means', 'wig', 'this is what the noun wig means', 4, 2);
INSERT INTO favourite VALUES (5, 'greedily', 'jumped', 'this is what the adverb greedily means', 'jumped', 'this is what the verb jumped means', 2, 2);
ALTER SEQUENCE favourite_id_seq RESTART WITH 6 INCREMENT BY 1;

INSERT INTO writing VALUES (1, 'This is the beginning of my created story. This be the middle, a very rough middle. And this is the end of it', 'This is the beginning of my created story. This be the middle, an edited and polished middle. And this is the end of it', 1, 2, 1, '2016-06-22 19:10:25-07');
INSERT INTO writing VALUES (2, 'This is the beginning of my created story. This be the middle, a very rough middle. And this is the end of it', 'This is the beginning of my created story. This be the middle, an edited and polished middle. And this is the end of it', 4, 1, NULL , '2017-06-22 19:10:25-07');
INSERT INTO writing VALUES (3, 'This is the beginning of my created story. This be the middle, a very rough middle. And this is the end of it', 'This is the beginning of my created story. This be the middle, an edited and polished middle. And this is the end of it', 5, 3, 2, '2018-06-22 19:10:25-07');
ALTER SEQUENCE writing_id_seq RESTART WITH 4 INCREMENT BY 1;

INSERT INTO collective_writer VALUES (1, 1);
INSERT INTO collective_writer VALUES (2, 1);
INSERT INTO collective_writer VALUES (3, 1);
INSERT INTO collective_writer VALUES (2, 2);
INSERT INTO collective_writer VALUES (4, 2);
