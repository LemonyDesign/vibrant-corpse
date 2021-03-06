/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const fetch = require('node-fetch');
const path = require('path');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const app = express();
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

const wordsApi = process.env.WORDS_API;

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());

function createWordObj(content) {
  return Object.assign(
    {},
    {
      word: content.word,
      definition: content.results[0].definition,
    }
  );
}

// fetch from words api
app.post('/api/words', (req, res) => {
  const url = `https://wordsapiv1.p.mashape.com/words/?partOfSpeech=${req.body.partofspeech}&random=true`;

  fetch(url, {
    headers: {
      'X-Mashape-Key': `${wordsApi}`,
      'X-Mashape-Host': 'wordsapiv1.p.mashape.com',
    },
  })
    .then(response => response.json())
    .then(content => res.json(createWordObj(content)))
    .catch(console.error);
});

app.post('/api/writer', (req, res) => {
  bcrypt
    .hash(req.body.registrationPassword, saltRounds)
    .then(function(hash) {
      return db.one(
        `INSERT INTO writer (first_name, email, hash) VALUES ($1,$2,$3) RETURNING id`,
        [req.body.firstName, req.body.registrationEmail, hash]
      );
    })
    .then(result => {
      return res.json({ id: result.id });
    })
    .catch(error => res.json({ error: error.message }));
});

app.get('/api/writer', function(req, res) {
  db.any('SELECT * FROM writer')
    .then(function(data) {
      res.json(data);
    })
    .catch(function(error) {
      res.json({ error: error.message });
    });
});

app.get('/api/writing', function(req, res) {
  db.any('SELECT * FROM writing')
    .then(function(data) {
      res.json(data);
    })
    .catch(function(error) {
      res.json({ error: error.message });
    });
});

// BASE REQUEST
// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/dist/index.html`), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on port number ${port}`);
});
