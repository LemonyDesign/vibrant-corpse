require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const path = require("path");
const app = express();
const wordsApi = process.env.WORDS_API;

app.use(express.static(path.join(__dirname, "dist")));
app.use(bodyParser.json());

function createWordObj(content) {
  return Object.assign(
    {},
    {
      word: content.word,
      definition: content.results[0].definition
    }
  );
}

app.post("/api/words", function(req, res) {
  const url = `https://wordsapiv1.p.mashape.com/words/?partOfSpeech=${
    req.body.partofspeech
  }&random=true`;

  fetch(url, {
    headers: {
      "X-Mashape-Key": `${wordsApi}`,
      "X-Mashape-Host": "wordsapiv1.p.mashape.com"
    }
  })
    .then(response => response.json())
    .then(content => res.json(createWordObj(content)))
    .catch(console.error);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});
const port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log(`Listening on port number ${port}`);
});
