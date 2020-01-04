DROP TABLE IF EXISTS writing;
DROP TABLE IF EXISTS favourite;
DROP TABLE IF EXISTS writer;

CREATE TABLE writer (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  hash VARCHAR(72)
);

CREATE TABLE favourite (
  id SERIAL PRIMARY KEY,
  favourite_corpse VARCHAR(100) UNIQUE NOT NULL,
  favourite_modifier_word VARCHAR(50) UNIQUE NOT NULL,
  favourite_modifier_desc VARCHAR(100) UNIQUE NOT NULL,
  favourite_base_word VARCHAR(50) UNIQUE NOT NULL,
  favourite_base_desc VARCHAR(100) UNIQUE NOT NULL,
  writer_id INT NOT NULL,
  FOREIGN KEY (writer_id) REFERENCES writer (id)
);

CREATE TABLE writing (
  id SERIAL PRIMARY KEY,
  edit TEXT NOT NULL,
  original TEXT NOT NULL,
  favourite_id INT NOT NULL,
  writer_id INT NOT NULL,
  time timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  FOREIGN KEY (favourite_id) REFERENCES favourite (id),
  FOREIGN KEY (writer_id) REFERENCES writer (id)
);

INSERT INTO writer VALUES (1, 'Mark', 'mark@gmail.com', 'horse');
INSERT INTO writer VALUES (2, 'Debbie', 'debbie@gmail.com', 'pig');
INSERT INTO writer VALUES (3, 'Sarah', 'sarah@gmail.com', 'dog');
INSERT INTO writer VALUES (4, 'Jon', 'jon@gmail.com', 'cat');
INSERT INTO writer VALUES (5, 'William', 'william@gmail.com', 'ostrich');
ALTER SEQUENCE writer_id_seq RESTART WITH 6 INCREMENT BY 1;

INSERT INTO favourite VALUES (1, 'pickled heron', 'pickled', 'this is what the adjective pickled means', 'heron', 'this is what the noun heron means', 1);
INSERT INTO favourite VALUES (2, 'wasted water', 'wasted', 'this is what the adjective wasted means', 'water', 'this is what the noun water means', 3);
INSERT INTO favourite VALUES (3, 'toughly run', 'toughly', 'this is what the adverb toughly means', 'run', 'this is what the verb run means', 5);
INSERT INTO favourite VALUES (4, 'shoehorned wig', 'shoehorned', 'this is what the adjective shoehorned means', 'wig', 'this is what the noun wig means', 4);
INSERT INTO favourite VALUES (5, 'greedily jumped', 'greedily', 'this is what the adverb greedily means', 'jumped', 'this is what the verb jumped means', 2);
ALTER SEQUENCE favourite_id_seq RESTART WITH 6 INCREMENT BY 1;

INSERT INTO writing VALUES (1, 'This is the editable version of my story about a pickled heron', 'This is the raw version of the story.', 1, 2, '2016-06-22 19:10:25-07');
INSERT INTO writing VALUES (2, 'This is the editable version of my story about a shoehorned wig.', 'This is the raw version of the story.', 4, 1,  '2017-06-22 19:10:25-07');
INSERT INTO writing VALUES (3, 'This is the editable version of my story where someone greedily jumped', 'This is the raw version of the story', 5, 3, '2018-06-22 19:10:25-07');
ALTER SEQUENCE writing_id_seq RESTART WITH 4 INCREMENT BY 1;